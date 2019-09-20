# Some QA Testing Questions

### Is automation always advantageous? When should one decide to automate test cases?
It is not always advantageous to automate test cases. There are times when manual testing may be more appropriate. For instance, if the application’s user interface will change considerably in the near future, then any automation might need to be rewritten anyway. Also, sometimes there simply is not enough time to build test automation. For the short term, manual testing may be more effective. If an application has a very tight deadline, there is currently no test automation available, and it’s imperative that the testing get done within that time frame, then manual testing is the best solution.

### What is Selenium IDE?
Selenium IDE (Integrated Development Environment) is a prototyping tool for building test scripts. It is a Firefox and Chrome plugin and provides an easy-to-use interface for developing automated tests. Selenium IDE has a recording feature, which records user actions as they are performed and then exports them as a reusable script in one of many programming languages that can be later executed.

### What Selenium-Grid?
Selenium-Grid allows the Selenium RC solution to scale for large test suites and for test suites that must be run in multiple environments. Selenium Grid allows you to run your tests in parallel, that is, different tests can be run at the same time on different remote machines. This has two advantages. First, if you have a large test suite, or a slow-running test suite, you can boost its performance substantially by using Selenium Grid to divide your test suite to run different tests at the same time using those different machines. Also, if you must run your test suite on multiple environments you can have different remote machines supporting and running your tests in them at the same time. In each case Selenium Grid greatly improves the time it takes to run your suite by making use of parallel processing.

###  What is the difference between Test Plan and Test Strategy?
Test Strategy is at a higher level, mostly created by the Project Manager which demonstrates the overall approach of the testing for the entire project, whereas Test plan basically depicts the how the testing should be performed for a particular application, falling under a project.

### Can you explain the software testing life cycle?
Software Testing Life Cycle refers to a testing process which has specific steps to be executed in a definite sequence to ensure that the quality goals have been met.

Below are the phases of STLC:

- Requirements phase
- Planning Phase
- Analysis phase
- Design Phase
- Implementation Phase
- Execution Phase
- Conclusion Phase
- Closure Phase

### What is Usability testing?
Usability testing is a way to see how easy to use something is by testing it with real users. Users are asked to complete tasks, typically while they are being observed by a researcher, to see where they encounter problems and experience confusion.

### What is A/B testing?
A/B testing (sometimes called split testing) is comparing two versions of a web page to see which one performs better. You compare two web pages by showing the two variants (let's call them A and B) to similar visitors at the same time. The one that gives a better conversion rate, wins!

### What is Exploratory Testing in Agile?
Exploratory Testing is an important activity in an agile environment as it can help software testers to keep up with the rapid development pace of agile software projects. ... Exploratory Testing is defined as simultaneous learning, test design and test execution

### Why do we need exploratory testing?
It emphasizes on personal freedom and responsibility of the individual tester. Test cases are not created in advance but testers check system on the fly. They may note down ideas about what to test before test execution. The focus of exploratory testing is more on testing as a "thinking" activity.

### What is Performance test?
Performance testing is the process of determining the speed, responsiveness and stability of a computer, network, software program or device under a workload. Performance testing can involve quantitative tests done in a lab, or occur in the production environment in limited scenarios.

### What is Reliability test?


### What does mean BDD?
Behavior-Driven Development

### What does mean DRY?
don't repeat your self

### What does mean DSL?
domain-specific language

### Each test should have one purpose!!
1 - easier to debug
2 - easier to update if business rules change

### What is Continuous Integration (CI)?
Continuous Integration (CI) is the process of automating the build and testing of code every time a team member commits changes to version control. CI encourages developers to share their code and unit tests by merging their changes into a shared version control repository after every small task completion. Committing code triggers an automated build system to grab the latest code from the shared repository and to build, test, and validate the full master branch (also known as the trunk or main).

### What is DevOps?
DevOps is the union of people, process, and products to enable continuous delivery of value to our end users. The contraction of “Dev” and “Ops” refers to replacing siloed Development and Operations to create multidisciplinary teams that now work together with shared and efficient practices and tools. Essential DevOps practices include agile planning, continuous integration, continuous delivery, and monitoring of applications.

### Agile VS DevOps
https://www.guru99.com/agile-vs-devops.html

### What is staging environment?
A staging environment (stage) is a nearly exact replica of a production environment for software testing. Staging environments are made to test codes, builds, and updates to ensure quality under a production-like environment before application deployment

### What is DSP environments?
-  development
-  staging
-  production

### Development Environment
The development environment normally has three server tiers, called development, staging and production. All three tiers together are usually referred to as the DSP.

- Development Server: Here is where the developer tests code and       checks whether the application runs successfully with that code.     Once the application has been tested and the developer feels that    the code is working fine, the application then moves to the          staging server.
- Staging Server:This environment is made to look exactly like the     production server environment. The application is tested on the      staging server to check for reliability and to make sure it does     not fail on the actual production server. This type of testing on    the staging server is the final step before the application could    be deployed on a production server. The application needs to be      approved in order to deploy it on the production server.
- Production Server: Once the approval is done, the application        then becomes a part of this server.

### What is Exploratory Testing?
Exploratory testing is all about discovery, investigation, and learning. It emphasizes personal freedom and responsibility of the individual tester. It is defined as a type of testing where Test cases are not created in advance but testers check system on the fly. They may note down ideas about what to test before test execution. The focus of exploratory testing is more on testing as a "thinking" activity.

### What is SSO testing(Single Sign On)?
The definition for single sign-on from The Open Group is, "Single sign-on (SSO) is a mechanism whereby a single action of user authentication and authorization can permit a user to access all computers and systems where he has access permission, without the need to enter multiple passwords.

### What is Regression Testing?
Whenever developers change or modify their software, even a small tweak can have unexpected consequences. Regression testing is testing existing software applications to make sure that a change or addition hasn’t broken any existing functionality. Its purpose is to catch bugs that may have been accidentally introduced into a new build or release candidate, and to ensure that previously eradicated bugs continue to stay dead.  By re-running testing scenarios that were originally scripted when known problems were first fixed, you can make sure that any new changes to an application haven’t resulted in a regression, or caused components that formerly worked to fail.  Such tests can be performed manually on small projects, but in most cases repeating a suite of tests each time an update is made is too time-consuming and complicated to consider, so an automated testing tool is typically required.

### What is the difference between a function and a method?
A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

1. A method is implicitly passed the object on which it was called.
2. A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).

### There are four foundamental ideas in OOP to keep in mind when you create a classes
- Abstraction
- Polymorphism
- Inheritance
- Encapsulation

### What is Unified Modeling Language (UML)?
UML, short for Unified Modeling Language, is a standardized modeling language consisting of an integrated set of diagrams, developed to help system and software developers for specifying, visualizing, constructing, and documenting the artifacts of software systems, as well as for business modeling and other non-software systems. The UML represents a collection of best engineering practices that have proven successful in the modeling of large and complex systems. The UML is a very important part of developing object oriented software and the software development process. The UML uses mostly graphical notations to express the design of software projects. Using the UML helps project teams communicate, explore potential designs, and validate the architectural design of the software. In this article we will give you detailed ideas about what is UML, the history of UML and a description of each UML diagram type, along with UML examples.

### What is the differnce between "User stories" and "Use cases"
|   User Stories                |        Use Cases                  |
| ----------------------------  |:----------------------------      |
| Short(one index card)         |   Long(a document)                |
| One goal, no details          |   Multiple goals and details      |
| Informal                      |   Casual to (very) formal         |
| Placeholder for conversation  |   "Record of conversation"        |


### What is the difference between build and release?
A “build” is a developed application for the customers that is given by development team to the software testing team. A “release” is an official launch of the application for the customers. A build when tested and certified by the software testing team is provided to the customers as “release”.

### What is RTM (Requirement Traceability Matrix)?
Requirement Traceability Matrix or RTM captures all requirements proposed by the client or software development team and their traceability in a single document delivered at the conclusion of the life-cycle.

### What is the critical path testing? 
Critical path testing is aimed at exploring the functionality used by typical users in typical daily activities. The idea is borrowed from project management and transformed in the context of testing into the following: there are most users who most often use a certain subset of the application functions. It is these functions that need to be checked as soon as we were convinced that the application “works in principle” (the smoke test was successful).

* ***What is the the positive test of the critical path?***
A positive test of the critical path is a test of the software product functionality that the user faces daily.

* ***What is the negative test of the critical path?***
A negative test of the critical path is a test of various options for non-standard use of the functionality used by the user every day.

[Read more about the critical path](https://newline.tech/blog/critical-path-test)

### The Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD)
The Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD) process is a framework that enables this approach. The biggest difference between these stages (CI/CDs) is whom it benefits most at each stage.

CI benefits developers most because it allows for code produced to be automatically tested and continuously “integrated” with other developers’ code, and with the existing codebase. The developer benefits from receiving continuous and immediate feedback regarding code and integration errors. As s/he fixes these errors, automated testing tools in this stage will report if the errors were successfully fixed and when the code is accepted. This continuous feedback loop dramatically increases a developer’s productivity.

Continuous Delivery benefits business users because as soon as code is successfully accepted in the CI stage and a logical function can be tested, it is released to users. They verify that the features meet their expectations and provide feedback to developers who then address the feedback in this stage. This feedback loop between users and developers is continuous and seamless. Whereas in traditional waterfall method, users could wait weeks/months to see the features for the first time, this approach can dramatically reduce the time to just hours/days.

Continuous Deployment seamlessly pushes code that has been successfully accepted in the CI/CD cycle into the production environment. This stage benefits all key stakeholders, from application investors who fund the development to external consumers and internal end-users as new features/application is available for immediate (external) commercial sale or internal use.

Developers can best utilize the CI/CD/CD process by leveraging on Open Source tooling (e.g., Jenkins, GIT, and Bamboo from Atalassian), or AWS services (e.g., Code Deploy) that automates various integration, deployment, and release management tasks.

### What's the difference between assertion library, testing framework and testing environment in javascript?
- Assertion libraries are tools to verify that things are correct.
This makes it a lot easier to test your code, so you don't have to do thousands of if statements.

- Testing frameworks are used to organize and execute tests.
Mocha and Jasmine are two popular choices (and they're actually kinda similar).
Example (using mocha with should.js here):

### What is meant by the Experience Based Testing?
As of now, you all might have understood the basic meaning of "experience based testing". It is the technique of executing testing activities with the help of experience gained through several years of churning. Basically,a tester verifies and validates the software product quality using his/her past experience of testing the similar type of product in the respective domain.