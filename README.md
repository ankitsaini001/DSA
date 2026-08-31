# DSA

Personal practice repo for Data Structures & Algorithms — JavaScript. This is a running log: new topics and solutions get added as I learn them, so the structure below will keep growing.

## 📌 Progress Log

| Date | Topic | Notes |
|------|-------|-------|
| 2026-08-10 | [Functions basics](functions/functions.js) | Console basics, value vs reference (arrays/objects), function declaration & reuse, return values, conditionals (`checkUserAge`), even/odd check |
| 2026-08-11 – 2026-08-23 | [Loops](loops/loops.js) | `for`/`while` fundamentals, digit sum & reversal, factorial, and array practice — search, min/max, negative/even/odd counts, second-largest (with duplicates) |
| 2026-08-16 – 2026-08-19 | [Nested loops](loops/loop_in_loop.js) | Loop-in-loop pair printing, triangular iteration, generating pairs from an array |
| 2026-08-18 – 2026-08-28 | [Star & number patterns](loops/star_patterns.js) | Squares, right-angled & reverse triangles, right-aligned triangles, alternating 1/0 rows, pyramids & reverse pyramids |
| 2026-08-24 | [Count digits](countdigit/countdigit.js) | Digit counting with corner cases: `n = 0` and negative numbers |
| 2026-08-25 | [Palindrome check](Warm%20Up/palindrome/palindrome.js) | Negative-number handling, boolean-return refactor, LeetCode version |
| 2026-08-25 – 2026-08-27 | [Reverse integer](Warm%20Up/palindrome/reverse.js) | Negative-number handling, LeetCode 32-bit signed overflow check |
| 2026-08-30 | [Time complexity (Big O)](TimeSpaceComplexity/timespace.js) | Linear vs binary search walkthrough, best case vs worst case, growth-rate graph (`n` vs steps), common complexities O(1) → O(n!), combining loops (add vs multiply), dropping constants & lower-order terms |
| 2026-08-30 | [Space complexity (Big O)](TimeSpaceComplexity/timespace.js) | Extra-memory rules: fixed variables → O(1), a new size-`n` array → O(n), a new `n x n` matrix → O(n²) |

## 📂 Structure

Each topic gets its own folder, named after the topic:

```
DSA/
├── functions/          # JS functions — declaration, params, return values, reuse
├── loops/               # for/while, nested loops, array traversal, star & number patterns
├── countdigit/           # digit-counting with corner cases (zero, negative)
├── Warm Up/              # early practice snapshots, plus palindrome & reverse-integer work
│   └── palindrome/        # palindrome check + reverse integer (incl. LeetCode variants)
├── TimeSpaceComplexity/  # Big O notes — linear vs binary search, growth-rate comparisons, space complexity rules
├── arrays/               # (coming soon — dedicated topic; array basics so far live in loops/)
├── strings/              # (coming soon)
├── recursion/            # (coming soon)
├── sorting/              # (coming soon)
├── searching/            # (coming soon)
├── linked-lists/         # (coming soon)
├── stacks-queues/        # (coming soon)
├── trees/                # (coming soon)
├── graphs/               # (coming soon)
└── dynamic-programming/  # (coming soon)
```

## ✅ Topics Covered

- [x] Functions — basics, parameters, return values, reuse
- [x] Loops — `for`/`while`, nested loops, array traversal & searches
- [x] Pattern printing — star/number triangles, pyramids, alternating patterns
- [x] Digit manipulation — count digits, reverse integer, palindrome check
- [x] Time complexity (Big O) — linear vs binary search, best/worst case, growth curves, combining & simplifying complexities
- [x] Space complexity (Big O) — O(1) fixed variables, O(n) new array, O(n²) new matrix
- [ ] Arrays (as a dedicated topic)
- [ ] Strings
- [ ] Recursion
- [ ] Sorting algorithms
- [ ] Searching algorithms
- [ ] Linked Lists
- [ ] Stacks & Queues
- [ ] Trees
- [ ] Graphs
- [ ] Dynamic Programming

## 🔄 How this repo is maintained

- Every new concept learned gets its own file (and folder, if it's a new topic) with small, runnable examples.
- The **Progress Log** table above gets a new row each time a topic is added or meaningfully updated.
- The **Topics Covered** checklist gets ticked off as topics are completed.

## ▶️ Running examples

Each file is plain Node.js — run any file directly:

```bash
node functions/functions.js
node loops/star_patterns.js
node countdigit/countdigit.js
node "Warm Up/palindrome/reverse.js"
node TimeSpaceComplexity/timespace.js
```
