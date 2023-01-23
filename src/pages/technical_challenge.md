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
I'm going to talk about a recent issue that I've been facing with a client.


The service provided by the company is energy disaggregation.
They use artificial intelligence to identify each appliance's consumption.


Simply put, every house appliance has its own fingerprint,
so they know if that amount of energy is coming from a dishwasher or an electric shower.

---

Having this context in mind, I'm going to briefly describe the problem.

The service runs the disaggregation every thirty minutes,
and it is expected to have the raw data for that thirty-minute window.


If for some reason the data is not there, the service executes a different workflow.

From early 2022 up to mid October,
we've found four different scenarios in which the data was not coming
and we weren't initially covering.


For each time,
we spent a few weeks fixing the code and validating the solution.

---

In January of 2023,
we found yet another exception for our currently implemented use cases.


But instead of adding a fifth rule to the code,
I stepped back to look at the problem as a whole.


The issue was our understanding of the requirements.
We expect to have data every thirty minutes.
But, as we've learned last year,
there are different reasons for why this might not be the case.

---

I called a team meeting to propose a new design of an event-based architecture,
which, instead of expecting the data to be there at regular intervals,
the service would be notified when all the data have arrived.
This will ensure the data is always present for the disaggregation.

---

The lesson here is that we should invest more time eliciting the requirements
and plan the design accordingly.


As Dave Quick said in the book _97 Things Every Software Architect Should Know_:
"You don't drive the architecture, the requirements do.
You do your best to serve their needs."

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
