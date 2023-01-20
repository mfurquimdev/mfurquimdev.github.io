---
title: Discuss a Technical Challenge You Have Faced
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <h1>{{title}}</h1>
</div>

<hr style="border-style: solid; border-width: 0px; box-shadow: 0 0px 6px 2px #4C566A;">
<div style="font-weight: 900; font-size: xx-large; text-align: justify">
For this technical challenge video,
I'm going to be talking about a recent issue that I've been facing with a client.

---

The service provided by the company is energy disaggregation.
They use artificial intelligence to identify each appliance's consumption.
Simply put, every house appliance has its own fingerprint,
So they know if that amount of energy is coming from a dishwasher or an electric shower.

---

Having this context in mind, I'm going to briefly describe the problem.

The service runs every thirty minutes, expecting the data to be present for the disaggregation

So, every thirty minutes the service expects the data to be present and run the disaggregation.
In the case there's no data, we had to implement a special logic.

---

From early 2022 up to mid October,
we have found four different scenarios that we weren't covering.
So we spent a few weeks each time to fix it and validate the solution.

---

On January of 2023, we found yet another exception.
But instead of adding a fifth rule in the code,
I stepped back to look at the problem as a whole.

---

The issue was our presupposition.
We expected to have data every thirty minutes.

But, as we've seen in the last year, this might not always be the case.

I called a meeting with my colleagues and proposed the idea of implementing an event based architecture.
Instead of expecting the data to be there at regular intervals,
the service will be notified _when_ the data arrives.
This will ensure the data is always present for the disaggregation.

The takeaway is: "if something is giving a lot of trouble, there might be a better approach"

---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

</div>
