// worker_threads: 노드에서 멀티 스레드 방식으로 작업 가능
//      isMainThread: 현재 코드가 실행되는 스레드가 메인인지 멀티인지 구분

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

if (isMainThread) {
  // 메인스레드
  const threads = new Set(); // 중복되지 않는 배열
  threads.add(new Worker(__filename, { workerData: { start: 1 } }));
  threads.add(new Worker(__filename, { workerData: { start: 2 } }));

  for (let worker of threads) {
    worker.on('message', (value) => {
      console.log('워커로부터', value);
    });
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('워커 끝~');
      }
    });
  }
} else {
  // 멀티스레드
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}

// --------------------------------------------------
// 싱글 스레드로 2에서 10,000,000까지의 소수 개수 찾기

const min = 2;
const max = 10_000_000;
let primes = [];

function generatePrimtes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time('primes');
generatePrimtes(min, max);
console.timeEnd('primes');

console.log(primes.length);

// --------------------------------------------------
// 멀티 스레드로 2에서 10,000,000까지의 소수 개수 찾기

function findPrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) {
  const threadsCount = 8;
  const threads = new Set();
  const range = Math.ceil((max - min) / threadsCount);
  let start = min;
  for (let i = 0; i < threadsCount - 1; i++) {
    const wStart = start;
    threads.add(
      new Worker(__filename, {
        workerData: { start: wStart, range },
      })
    );
    start += range;
  }
  threads.add(
    new Worker(__filename, {
      workerData: { start, range: range + ((max - min + 1) % threadsCount) },
    })
  );

  for (let worker of threads) {
    worker.on('error', (err) => {
      throw err;
    });
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log(primes.length);
      }
    });
    worker.on('message', (msg) => {
      primes = primes.concat(msg);
    });
  }
} else {
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}
