int main() {
    int n = 512, i=0, s=0;
    for(i=1;i<=512; i++) s+=n/i;

    printf('%d\n', s);
    return 0;
}