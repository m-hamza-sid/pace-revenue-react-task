# Pace gets organised 📅 - Solution

## Notes
As asked in the brief, time-boxed the solution to not increase more than 3 hours.

### Requirements
We would like to build a simple day view for a calendar, populated with data from a graphql API. The API returns a list of events which have a start and end time in minutes since midnight. So 9am is 540 minutes, 9.30 is 570 minutes and so on.

When rendering the calendar:

- Events should be shown without any overlapping
- If multiple events collide, then they should have equal width
- Styling can be kept extremely simple
- We only need to display the events

## Design Choices
### Just enough architecture / Simplicity over complexity
- Focus has been put to cater the mentioned requirements only, although the solution is designed to be
scalable in terms of plausible feature additions like multi-day view, limiting "view" to only include
working hours etc.

- Intentionally opted for a more feature-oriented solution using css grid. Although the problem is essentially a
"Line Sweep" problem, the current limitation of css grid solution didn't interfere with the given requirements,
so deemed it unnecessary to introduce manual calculations required for intervals overlap detection.

### Limitations / Tradeoffs
- In current implementation, the width of all events is dependent on the max combinatorial number of overlapping events,
this "side-effect" has minimal impact on functional requirements. Potential [fix for future](https://github.com/w3c/csswg-drafts/issues/2402).

- The configuration layer is bootstrapped with React Context Api, the intention was just to separate 
that layer from the functional code.

- Some of the styles that depend on configuration value are being generated within component and thus are redundant,
I left them so, as to demonstrate that dynamic scaling implementation.

- Intentionally didn't refactor the api calling to the separate data layer due to time limit.

### Solution Overview
#### Structure
- Have structured the solution based on atomic design principles (although 'templates' didn't make any sense here)

#### Logical Overview
- The time calender is displayed over two layers i.e.
  1. A background marker layer with 1px = 1minute scale, with marker at 60px interval, starting from 0 and ending at 1440 (60*24).
  2. The front "event" layer based on css grid where each grid row is based on 1px = 1 minute scale, starting from 0 and ending at 1440 (60*24).

The approach makes it trivial to display the event that are already coming in minutes from serverside.

### Improvements
- Would really want to add tests(unit/snapshot/integration/e2e) but skipped them due to time limits, although I have found that doing TDD 
is often not viable during visual UI development, but still would like to add specs for the core functionality.

- Although have tried to "design everything by interface", still would like to implement formal clean architecture layers
for ease of development communication.
- 
Once completed, please email your solution to ben@pacerevenue.com. If you have any questions, please let us know!
