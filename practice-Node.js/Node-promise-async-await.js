// function fundAndSaveUser(Users) {
//   Users.findOne(
//     {},
//     (err, user) => {
//       // 첫 번째 콜백
//       if (err) {
//         return console.error(err);
//       }
//     },
//     (user.name = 'zero'),
//     user.save((err) => {
//       // 두 번째 콜백
//       if (err) {
//         return console.error(err);
//       }
//     }),
//     Users.findOne({ gender: 'm' }, (err, user) => {
//       // 세 번째 콜백
//       if (err) {
//         return console.error(err);
//       }
//     })
//   );
// }

// Promise: 내용이 실행은 되었지만, 결과를 아직 반환하지 않은 객체
//      then을 붙이면 결과를 반환
// resolve(성공리턴값) => then으로 연결
// reject(실패리턴값) => catch로 연결
// finally => 무조건 실행
//      callback은 코드 분리가 불가

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((User) => {
      return Users.findOne({ gender: 'm' });
    })
    .catch((err) => {
      return console.error(err);
    });
}

// Promise.resolve(성공리턴값): 바로 resolve하는 promise
// Promise.reject(실패리턴값): 바로 reject하는 promise

// Promise.all(배열): 여러 개의 프로미스를 동시에 실행
//      하나라도 실패하면 catch로 감
//      Promise.allSettled(배열) => 실패한 것만 추려낼 수 있음

// 변수 = await promise; => promise가 resolve된 값이 변수에 저장
// 변수 await 값; => 값이 변수에 저장

async function findAndSaveUser(Users) {
  let user = await Users.findOne({});
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
}
