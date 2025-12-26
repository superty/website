---
title: "Curriculum Vitae"
date: 2025-12-23
draft: false
---

<div class="font-selector">
  <label for="font-chooser">Heading:</label>
  <select id="font-chooser">
    <option value="bitter">Bitter</option>
    <option value="lora">Lora</option>
    <option value="literata">Literata</option>
  </select>
  <label for="body-font-chooser">Body:</label>
  <select id="body-font-chooser">
    <option value="adwaita">Adwaita Sans</option>
    <option value="nunito">Nunito</option>
  </select>
</div>

<div class="cv-section">

## Professional Summary

Experience in **performance engineering and algorithms** across the stack:

- implemented & maintain the integer linear programming (ILP) solver in MLIR [[code sample]](https://github.com/llvm/llvm-project/blob/main/mlir/lib/Analysis/Presburger/Simplex.cpp#L1996) [[library]](https://github.com/llvm/llvm-project/tree/main/mlir/lib/Analysis/Presburger)
- optimized an ILP solver for compiler workloads using C++ templates & AVX-512 vector intrinsics to achieve a **3.6x speedup over SOTA** [[Distinguished Paper at OOPSLA]](https://2021.splashcon.org/details/splash-2021-oopsla/66/FPL-Fast-Presburger-Arithmetic-through-Transprecision)
- research on **cache hierarchy miss rate prediction** [[paper at PLDI]](https://dl.acm.org/doi/10.1145/3656452)
- designed **asymptotically better ILP algorithms** for our compiler use-case [[paper at CAV]](https://link.springer.com/chapter/10.1007/978-3-031-65627-9_14)
- performance debugging: reading flamegraphs, LLVM IR, x86-64 assembly, architecture diagrams, ...
- benchmarking with [PMCs](https://www.amd.com/content/dam/amd/en/documents/epyc-technical-docs/programmer-references/58550-0.01.pdf), minimizing noise from frequency scaling, SMT, context switches, ...

Strong math background evidenced by experience in theoretical research.

</div>

<div class="cv-section">

## MLIR Presburger Library
[[Commits]](https://github.com/llvm/llvm-project/commits/main?author=superty) [[Reviewing]](https://github.com/search?q=repo\%3Allvm\%2Fllvm-project+\%22Reviewed+By\%3A+arjunp\%22\&type=commits\&p=1) [[More Reviewing]](https://github.com/llvm/llvm-project/pulls?q=is\%3Apr+reviewed-by\%3Asuperty+) [[Website]](https://grosser.science/FPL)

- Lead maintainer of the Presburger library of the LLVM/MLIR open-source compiler framework
- Reviewed 100+ pull requests and worked with a team of up to four other contributors
- Added support for multiprecision integers to LLVM based on APInt & optimized it for our workload

</div>

<div class="cv-section">

## Experience <div class="experience-filters"><label><input type="checkbox" class="tag-filter" value="systems" checked> Systems</label><label><input type="checkbox" class="tag-filter" value="ai-safety" checked> AI Safety</label><label><input type="checkbox" class="tag-filter" value="theory" checked> Theory</label></div>

<div class="experience-item" data-tags="systems,theory">

### Student Researcher at Google DeepMind (Paris)
**November 2023 — February 2024**

Worked on static analysis for tiled linear algebraic kernels. I developed asymptotically faster algorithms for ILP for subclasses relevant to compilers, with proofs of efficiency & correctness. [[Paper @ CAV]](https://link.springer.com/chapter/10.1007/978-3-031-65627-9_14)

</div>

<div class="experience-item" data-tags="systems">

### Research Intern at ETH Zürich
**August 2019 — April 2020**

Wrote the MLIR Presburger library (see above) and worked on papers published at OOPSLA '20 and '21.

</div>

<div class="experience-item" data-tags="theory">

### Research Intern at Tata Institute of Fundamental Research, Mumbai
**May — July 2018**

Studied approximation algorithms and hardness of approximation (via probabilistically checkable proofs).

</div>

<div class="experience-item" data-tags="systems">

### Software Engineering Intern at Google Zürich
**May — August 2017**

Worked on performance optimizing RPC calls in a C++ microservices framework.

</div>

<div class="experience-item" data-tags="ai-safety,theory">

### Visiting Researcher at the Alignment Research Center
**August 2025**

Worked with a team of math/theoretical CS PhDs. In two weeks, I found a counterexample for a proposed algorithm, showing it yielded poor approximations. The problem had been open for two months.

</div>

<div class="experience-item" data-tags="ai-safety,theory">

### Research Scholar at the ML Alignment & Theory Scholars Program
**February — May 2024**

Worked on Markov decision process theory.

</div>

<div class="experience-item" data-tags="theory">

### Undergraduate Research at IIIT Hyderabad
**2017 — 2018**

Worked on hypergraph theory and communication complexity.

</div>

</div>

<div class="cv-section">

## Education

**2024 — present:** Visiting PGR Student at the **University of Cambridge** (Advisor: Tobias Grosser)<br>
**2022 — present:** PhD in Informatics at the **University of Edinburgh** (Advisor: Tobias Grosser)<br>
Thesis title: Efficient Static Analysis for Neural Networks

*I did the second half of my PhD in Cambridge, as my advisor moved there.*

**2015 — 2021:** Bachelor's and MS in Computer Science and Engineering at **IIIT Hyderabad**

</div>

<div class="cv-section">

## Skills

Performance engineering, benchmarking, compilers, theoretical computer science, algorithms.

C++, Python, shell scripting (daily use). x86-64 assembly, LLVM IR (mostly reading, some writing).

</div>

<div class="cv-section">

## Achievements

[Bronze Medal](https://stats.ioinformatics.org/people/5608) at the **International Olympiad in Informatics (IOI) 2015.**

World Finalist at the **International Collegiate Programming Competition (ICPC) 2020.**

<!-- Member of the team representing IIIT Hyderabad; we qualified for and [competed at the ICPC World Finals](https://icpc.global/community/results-2020). -->

</div>

<div class="cv-section publications">

## Publications


*Strided Difference Bound Matrices.*
[CAV 2024.](https://link.springer.com/chapter/10.1007/978-3-031-65627-9_14)
<br>
<span class="me">Arjun Pitchanathan</span>, Albert Cohen, Oleksandr Zinenko, Tobias Grosser.

*Falcon: A Scalable Analytical Cache Model.*
[PLDI 2024.](https://dl.acm.org/doi/10.1145/3656452)
<br>
<span class="me">Arjun Pitchanathan</span>, Kunwar Shaanjeet Singh Grover, Tobias Grosser.

*FPL: Fast Presburger Arithmetic through Transprecision.*
[OOPSLA 2021.](https://doi.org/10.1145/3485539)
<span class="award">Distinguished Paper Award.</span>
<br>
<span class="me">Arjun Pitchanathan</span>, Christian Ulmann, Michel Weber, Torsten Hoefler, Tobias Grosser.

*Fast Linear Programming through Transprecision Computing on Small and Sparse Data.*
<br>
[OOPSLA 2020.](https://doi.org/10.1145/3428263) <span class="award">[HiPEAC Tech Transfer Award.](https://www.hipeac.net/news/6975/announcing-winners-hipeac-tech-transfer-awards-2021/)</span>
Tobias Grosser, Theodoros Theodoridis, Maximilian Falkenstein, <span class="me">Arjun Pitchanathan</span>, Michael Kruse, Manuel Rigger, Zhendong Su, Torsten Hoefler.
 

</div>

<div class="cv-section">

## Other Research

**Provably Efficient LRU Cache Modeling.**
Arjun Pitchanathan and Tobias Grosser. *Under preparation.*

**Compositional Polytope MDPs.**
Vanessa Kosoy and Arjun Pitchanathan. *Under preparation.*

**On the Simple Quasi Crossing Number of K₁₁.**
Arjun Pitchanathan and Saswata Shannigrahi.
Symposium on Graph Drawing and Network Visualization (GD), 2019. Poster with [extended abstract](https://arxiv.org/abs/1908.07851).

**Improved Encoding and Counting of Uniform Hypertrees.**
Arjun Pitchanathan and Saswata Shannigrahi. [Manuscript.](https://arxiv.org/abs/1711.03335v4)

**Decision-Theoretic Compression and Value-Aware Measures of Information and Noise.**
Tushant Jha, Arjun Pitchanathan, and Kannan Srinathan.
[Manuscript.](https://github.com/Superty/dtcompress/blob/master/dtcompress_draft.pdf)

</div>

<div class="cv-section">

## Talks

I have given talks at:

- the OOPSLA 2021 systems conference [[online version of the talk]](https://www.youtube.com/watch?v=UibEvel177w)
- the Programming Language Design and Implementation (PLDI) conference in 2022 and [2024](https://www.youtube.com/watch?v=ALOvruhw8sI)
- the Compilers for Machine Learning (C4ML) workshop at CGO 2021
- the International Workshop on Polyhedral Compilation Techniques at HiPEAC 2022
- the EuroLLVM Developer's Meeting in 2022 and 2024
- the LLVM Developer's Meeting in 2021, 2022 (MLIR summit), and 2024

</div>

<div class="cv-section">

## Professional Service

**Reviewer** for **ACM Transactions on Architecture and Code Optimization**

**Program Committee Member** for **IMPACT '23**,<br>
the 13th International Workshop on Polyhedral Compilation Techniques.

**Artifact Evaluation Committee Member** for **CC '24**,<br>
the ACM SIGPLAN 33rd International Conference on Compiler Construction.

</div>

<div class="cv-section">

## Teaching

### Teaching Assistant at IIIT Hyderabad
**Monsoon 2018, Spring 2019 semesters**

Served as a TA for the cryptography and algorithms courses.

### Coach at the Indian IOI Training Camp
**2016, 2018**

Part of the team that took classes, prepared problems and test data, and evaluated students' solutions at the International Olympiad in Informatics Training Camp (IOITC), which is held to select a team to represent India at the International Olympiad in Informatics (IOI).

</div>

<div class="cv-section">

## Undergraduate Activities

### Coordinator of the Competitive Programming Club
**Monsoon 2017; Spring 2018**

One of two coordinators for the Competitive Programming Club that year. This involved conducting events and teaching topics in computer science, especially involving algorithms and data structures.

### Student Systems Administrator
**Monsoon 2017**

Had the opportunity to get some hands-on experience in system administration by helping out the university's full-time staff.

### Copy-editor at the Ping! Student Magazine
**Monsoon 2017**

- Copy-edited all the articles in the Monsoon 2017 issue
- shepherded some articles through the writing process
- co-authored an article on the necessity of UBI after AGI
</div>
