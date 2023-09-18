---
uuid: 111e68c4-0285-4f21-ab36-4c1ce1989da1
date: 2023-05-06T11:15:53
created: 2023-05-06T11:15:53
aliases:
title: Automated Planning using Property-Directed Reachability with Seed Heuristics
published: true
modified: 2023-09-18T13:32:00
description: "Masters Thesis. The goal of this thesis is to implement a pre-processing step to the Property Directed Reachability algorithm, to potentially improve the run-time performance. We use the pattern database heuristic to make use of the planning task structure for the seeding algorithm."
cover_image: https://media.tiim.ch/023c1722-ac3d-45fd-b66c-9ff319dfc180.webp
cover_image_txt:
content_tags:
  - dev
  - planning-system
  - pdr
  - heuristic
---

## Abstract

Planning is the process of finding a path in a planning task from the initial state to a goal state. Multiple algorithms have been implemented to solve such planning tasks, one of them being the Property-Directed Reachability algorithm. Property-Directed Reachability utilizes a series of propositional formulas called layers to represent a super-set of states with a goal distance of at most the layer index. The algorithm iteratively improves the layers such that they represent a minimum number of states. This happens by strengthening the layer formulas and therefore excluding states with a goal distance higher than the layer index. The goal of this thesis is to implement a pre-processing step to seed the layers with a formula that already excludes as many states as possible, to potentially improve the run-time performance. We use the pattern database heuristic and its associated pattern generators to make use of the planning task structure for the seeding algorithm. We found that seeding does not consistently improve the performance of the Property-Directed Reachability algorithm. Although we observed a significant reduction in planning time for some tasks, it significantly increased for others.

[Download PDF](https://www.researchgate.net/publication/373994137_Automated_Planning_using_Property-Directed_Reachability_with_Seed_Heuristics)

## Cite

```bibtex
@phdthesis{bachmann2023,
    author = {Bachmann, Tim},
    year = {2023},
    month = {05},
    title = {Automated Planning using Property-Directed Reachability with Seed Heuristics},
    doi = {10.13140/RG.2.2.11456.30727},
    type = {Master's Thesis},
    school = {University of Basel}
}
```

%%

## Checklist

- [ ] Finish writing text
- [ ] Write description
- [ ] tags
- [ ] Thumbnail Created
  - [ ] Resized to 1024x512
  - [ ] Uploaded using uplog
  - [ ] Prompt text or description added
- [ ] Date set to timestamp
- [ ] Reviewed using grammarly
- [ ] Transferred to website/content folder
- [ ] Removed heading
- [ ] Reread on dev site

## 📎 Related

-
- [[Blog Posts]]

## 📇 Additional Metadata

- 🗂 Type:: #type/content/blog-post
- 📝 Status:: #status/idea
- 🔐 Visibility::
- 👥 Team::
- 🗨 Language: #lang/en

**Personal**

- 👍 Recommended By::
- 🔮 Inspired By::
- 👨‍🎓 Lecturer::
- 📕 Author::
