let nthUglyNumber = (n) => {
  if (n <= 0) return false;
  if (n === 1) return 1;
  let t2 = 0, t3 = 0, t5 = 0;
  let dp = new Array(n);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[t2] * 2, Math.min(dp[t3] * 3, dp[t5] * 5));
    if (dp[i] === dp[t2] * 2) t2++;
    if (dp[i] === dp[t3] * 3) t3++;
    if (dp[i] === dp[t5] * 5) t5++;
  }
  return dp[n - 1];
}