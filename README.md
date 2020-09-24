A couple of considerations:

## Improvements:

1. This definitely needs something like React Virtual Window because the DOM Nodes can get WAY too
   big.
2. Cards need an accordion or something to that effect in order to hide all the extra info.
3. I dislike the way some imports are codified `(import {something} from constants/constants)`.
   I know that there are many ways to deal with this (eg: having an Index file that reexports what´s needed, etc). I don´t like those alternatives because they tend to clutter the project with extra files. I don´t know, I guess it merits more research into the matter.

## Technical debt:

It´s been an hectic week. I´ve unit tested most components, but I couldn´t do an integration test
on App to see if everything put together was working properly. I just couldn´t find the time and I do apologise for that.
