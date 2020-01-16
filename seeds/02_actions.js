
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {title: 'Call an elected official', 
          description: 'Calling members of Congress is the most effective way to have your voice heard. Calls are tallied by staffers and the count is given to your representatives, informing them how strongly their constituents feel about a current issue. The sooner you reach out, the more likely it is that your voice will influence their position.', 
          reward: 20, 
          link: "https://5calls.org/"},
        {title: 'Email an elected official', 
          description: 'Communicating with your legislator via email is less effective than speaking with your legislator in person or making a phone call, but it has the advantage of being much easier for you. Due to the overwhelming volume of email, staffers may simply tally incoming emails, and present the legislator with totals on given issues.', 
          reward: 15, 
          link: "https://www.usa.gov/elected-officials"},
        {title: 'Make a social media post', 
          description: 'The advantages of using social media include: low (or no) hard costs for set-up; potentially wide reach; quick/instantaneous sharing of messages; and new opportunities to listen, engage, and monitor your progress. However, as an individual raising awareness, unless you have a wide platform, a social media post may not be the most effective use of your time. If going the social media route to raise awareness on an issue, include links to other actions such as making phone calls.', 
          reward: 10, 
          link: "https://5calls.org/"},
        {title: 'Speak with an elected official in person', 
          description: 'A personal meeting with your member of Congress is one of the best opportunities to demonstrate that there is a constituency for civil liberties in your district. From your local city council to your Senators in Washington, meeting with your elected officials about civil liberties issues is a lot easier than most people think. Remember, your legislators work for you! A lobby visit is merely a meeting for you to tell your elected representative what you think about a certain issue or bill, and to try to get him or her to take action on that issue.', 
          reward: 100, 
          link: "https://www.aclu.org/other/tips-meeting-your-elected-officials"},
        {title: 'Attend a town hall', 
          description: "Town hall meetings, also referred to as town halls or town hall forums, are a way for local and national politicians to meet with their constituents, either to hear from them on topics of interest or to discuss specific upcoming legislation or regulation. During periods of active political debate, town halls can be a locus for protest and more active debate. Asking a question at your legislator's town hall meeting lets them know what's important to you and raises awareness of your issue.", 
          reward: 70, 
          link: "https://www.careaction.org/election-toolkit/how-to-engage/attend-a-town-hall-meeting"},
        {title: 'Join an advocacy organization', 
          description: 'Advocacy groups implement advocacy strategies to cause change in public policy and/or opinion. They are critical in the ongoing evolution of our social, political, and economic institutions. Advocacy groups have quite the range and diversity of purpose, many of which involve lobbying and politics. If you’re looking to be an advocate for a non-political cause, there’s a strong chance that an outlet exists for you within a nonprofit advocacy group. Joining an advocacy organization means that you will have access to a wide range of resources and support.', 
          reward: 100, 
          link: "http://politicaladvocacy.org/subjects"},
        {title: 'Attend a protest or march', 
          description: 'For a protest to spur change, it has to become unignorable, so numbers matter. On average, every time a politician becomes informed of 10 protest events happening in their district, they become 1 percent more likely to support a bill that favors a protester’s position.', 
          reward: 40, 
          link: "https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf"},
        {title: 'Testify at a public hearing', 
          description: 'Public testimony at a hearing is the opportunity to be heard directly by the decision makers and potentially influence the outcome of votes. This is an incredibly powerful way to shape the outcome of policy and to share your group’s perspectives on a piece of legislation. Giving a compelling testimony can spark important debate and sway the opinions of legislators that are on the fence.', 
          reward: 100, 
          link: "https://indivisible.org/resource/indivisible-states-giving-public-testimony-legislative-hearing"},
        {title: 'Vote', 
          description: 'Voting is connected with a host of positive benefits for the individual voter. Compared to non-voters, voters are more likely to volunteer, contact their elected officials, and stay informed about local affairs. Voting is associated with better health outcomes, cohesive communities, more effective advocacy, and more.', 
          reward: 50, 
          link: "https://www.vote.org/polling-place-locator/"},
        {title: 'Register to vote', 
          description: 'Voting is connected with a host of positive benefits for the individual voter. Compared to non-voters, voters are more likely to volunteer, contact their elected officials, and stay informed about local affairs. Voting is associated with better health outcomes, cohesive communities, more effective advocacy, and more.', 
          reward: 150, 
          link: "https://www.usa.gov/register-to-vote"},
        {title: 'Organize a postcard party', 
          description: 'Postcards are a quick, visual way to communicate effectively with lawmakers. A small gathering to write postcards and learn about specific issues provides an opportunity for people to get involved and reach their representatives. While mail is generally not the most effective way to reach an elected official, the volume of postcards, and the personal, handwritten messages will increase visibility.', 
          reward: 70, 
          link: "https://postcardstovoters.org/faq/what-are-some-tips-on-hosting-a-postcard-party/"},
        {title: 'Participate in a postcard party', 
          description: 'Postcards are a quick, visual way to communicate effectively with lawmakers. A small gathering to write postcards and learn about specific issues provides an opportunity for people to get involved and reach their representatives. While mail is generally not the most effective way to reach an elected official, the volume of postcards, and the personal, handwritten messages will increase visibility.', 
          reward: 40, 
          link: "https://postcardstovoters.org/"},
        {title: 'Sign up to canvass door to door', 
          description: 'In a study on MoveOn GOTV operations, researchers found that contact with MoveOn volunteers increased voting turnout by approximately 9 percentage points. Because, unlike a conversation on a social media platform, a face-to-face interaction is deeply personal. Two people having a respectful conversation on a doorstep are more likely to find common ground.', 
          reward: 80, 
          link: "https://callhub.io/political-canvassing-tips-for-door-to-door-campaign/"}
        
        
      ]);
    });
};
