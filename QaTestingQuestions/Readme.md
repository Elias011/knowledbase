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