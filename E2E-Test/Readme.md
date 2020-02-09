# End to End Test

### What is “End to End Testing”?
```
Term “End to End testing” is defined as a testing method which determines whether the performance
of an application is as per the requirement or not.
It is performed from start to finish under real-world scenarios like communication of the application
with hardware, network, database and other applications.
```
### End to End testing of a Gmail account will include following steps:
* Launching Gmail login page through URL.
* Logging into Gmail account by using valid credentials.
* Accessing Inbox. Opening Read and Unread emails.
* Composing a new email, reply or forward any email.
* Opening Sent items and checking emails.
* Checking emails in Spam folder
* Logging out of Gmail application by clicking ‘logout’

### Few guidelines that should be kept in mind:
* Test cases should be designed from end user’s perspective.
* Should focus on testing some existing features of the system.
* Multiple scenarios should be considered for creating multiple test cases.
* Different sets of test cases should be created to focus on multiple scenarios of the system.

### Design Framework of End to End testing:
We will look into all the 3 categories one by one:
**User Functions**: Following actions should be performed as a part of building User Functions:

Listing features of the software systems and their interconnected sub-systems.
For any function, keep track of the actions performed as well as Input and Output data.
Find the relations, if any between different Users functions.
Find out the nature of different user functions .i.e. if they are independent or are reusable.

**Test Cases**:
*Following factors should be considered for building test cases:*
For every scenario, one or more test cases should be created to test each and every functionality of the user functions.
Every single condition should be enlisted as a separate test case

**Identify the bad tests**
```
There are 2 kinds of bad tests.. Slow and flaky. even 1 flaky test out of 5000 tests would cause submits to fail and slow everything down. and if tests take too long to run; a) folks will be more likely to skip them and b)that doesn’t exactly help motivate folks to write more tests.
```
### What is the differcnce between E2E test and UI test?
The main difference would be the coverage, the E2E test would try to cover the scenario which may be one use of the form. Where as, the UI testing would cover all the things that the user can do with the form, including entering bad data.