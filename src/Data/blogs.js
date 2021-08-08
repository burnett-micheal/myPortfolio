import HostAFan from "../Assets/image/HostAFan.jpg";

const blogs = Object.freeze({
    Host_A_Fan: {
        thumbnailImage: HostAFan, 
        description: `
        An article discussing my day to day at Host A Fan, and what I achieved while working there.
        `,
        article: [
            {text: `
            --- https://hostafan.azurewebsites.net/ ---
            `},
            {text: `
            My days typically started out at 11am, hopping on the computer for a zoom meeting. Here the entire team would go over what they had accomplished, what they would accomplish, and any slowdowns or pitfalls they had run into in the process. This helped keep the entire team up to date on all the developments for the project, and was a convenient time for the developers to discuss changes in schedule, expectations, or to request a code review.
            `},
            {text: `
            After standup we'd begin working on the app, typically via assigned tasks however at times we referenced the bug list and began working on that. The majority of my work was working with social links throughout the site, setting up forms and saving + retrieving them from the SQL Database. If I ran into any problem I was unable to solve I could put myself on the Q to receive assistance from a senior developer. However I preferred to research and problem solve as much as I could on my own, if it proved fruitless by my efforts I would discuss it over Code Talk in the evening.
            `},
            {text: `
            At times during the day, especially during a rush to a deadline, there would be Code Review requests. People who had in theory completed there app feature and wanted to push there code to the project. At this time a developer would aid them in the git process and review there code. This task could be gruelling at times due to needing to handle merge conflicts. Then a senior developer would review it and decide to merge or further assign tasks.
            `},
            {text: `
            About 8pm the developers would get together for a Code Talk, where we'd discuss more effective techniques for the project, and help any developers struggling with a certain task as a group. Overall this meeting was great for morale and group camaraderie, and oftentimes went on for quite a while.
            `},
            {text: `
            Demo Preparations was another regular occurrence during my time at Host A Fan. Generally taking the place of Code Talk during the week prior to the scheduled Project Demo for the clients. During this time the developers would get together, plan, and do mock demos in preparation for the deadline. I made use of workflowy to organize all of our roles in the demo, and help the driver during the presentation. This prep was vital to the success of each demo. During the demo the clients would ask questions and the respective developer would answer.
            `},
            {text: `
            This sums up a day in the life of a Host A Fan developer. Below you can find a more detailed list of what I did and what tools I used while working there:
            `}, 
            {text: `
            React: JQuery, JavaScript, Material UI, Bootstrap, HTML, CSS, Formik, Axios, Yarn, VS Code, FontAwesome, Props, Hooks, State Management, Component Mapping From Enums, Redirect On Click, Developed Stylish Components
            `},
            {text: `
            .Net Core: C#, Nuget, Visual Studio, Mapped Array To Table
            `},
            {text: `
            SQL Server: User-Defined Table Parameter To Batch Insert, Lookup Tables, Foreign Keys
            `},
            {text: `
            Misc: Git Bash, Postman
            `},
        ],
    },
});

export default blogs;