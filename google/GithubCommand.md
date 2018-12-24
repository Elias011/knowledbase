# Google information

### WHAT IS DATA LAYER?

I’ll repeat myself once again: Data Layer is one of the main Google Tag Manager concepts which ensures maximum flexibility, portability, and ease of implementation. Without it, there would be (almost) no variables or triggers in GTM. It is what keeps your tag management running properly. It is the key to unlocking Google Tag Manager’s potential.


### Google Tag Manager Snippet

Google Tag Manager is tool that makes it easier to add tags and tracking to your site for analytics, advertising, SEO fixes, you name it! It’s our preferred method for adding Google Analytics to a page. Learn more here about how Google Tag Manager and Google Analytics work together.


### Google Optimize Snippet

Google Optimize is a great free/paid A/B testing tool from Google that allows you to create and run experiments on your website. Before you can start using it however, you need to install it on your website. Need this? Check out more details on Google Optimize installation instructions.


### Resolve the probleem of invalid_grant for google cloude storage
go to :
```sh
https://console.developers.google.com/apis/credentials?project=project-name
```
Then make "create credential"
choise "service account key"
select JSON
then in service account select "Compute Engine default service account"
then click on create
in your project do write this code
```sh
const storage = new Storage({
  projectId: projectId,
  keyFilename:the path to your json file
});
```