# Hopel.io

A easy way for people with dyslexia and other reading difficulties learn how to read.
I built this project to help my younger sister who struggled to read. We were reccommended a paid subscription product by her tutor, which was buggy and slow and wouldn't allow for customisation and easy printing. When further speaking with the tutor she wasn't very happy with it. So I set out to create a alternative which exports to a word document.

Apparently I have been told that the research concludes that the process of phyisically having to scan the eye across the page helps train the eye movements for reading.

I hope this can help anyone who needs it!

# Install
To download please go to the releases section on the right and download the correct installer for your system :)

# Architecture
Under the hood it creates a table on a word document with the table bounderies set to invisible. It then splits the words in to the desiered ammounts and places these words into the table.

it does all the processing on the front end and only uses tauri for system dialogue messages.

# Setup dev environment

```
https://tauri.app/v1/guides/getting-started/prerequisites/
```
