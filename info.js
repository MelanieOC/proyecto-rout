
const TeacherList = [
  {
    name: "Angie McAngular",
    description: "Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!",
    src: "img/teachers/angie.png",
    id: 1
  },
  {
    name: "NodeStradamus",
    description: "'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.",
    src: "img/teachers/nodestradamus.png",
    id: 2
  },
  {
    name: "Geo 'Lo' Cation",
    description: "Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.",
    src: "img/teachers/geo.png",
    id: 3
  },
  {
    name: "Ecma Scriptnstuff",
    description: "Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.",
    src: "img/teachers/ecma.png",
    id: 4
  },
  {
    name: "Jay Query",
    description: "Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.",
    src: "img/teachers/jay.png",
    id: 5
  },
  {
    name: "Json Babel",
    description: "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.",
    src: "img/teachers/json.png",
    id: 6
  }
];

const CSSCourses = [
  {
    title: "CSS Basics",
    description: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.",
    src:"img/css/css_01.png",
    id: "css-1"
  },
  {
    title: "CSS Selectors",
    description: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.",
    src: "img/css/css_02.png",
    id: "css-2"
  },
  {
    title: "Responsive Layouts",
    description: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.",
    src: "img/css/css_03.png",
    id: "css-3"
  },
  {
    title: "CSS Flexbox Layout",
    description: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!",
    src: "img/css/css_04.png",
    id: "css-4"
  },
  {
    title: "CSS Transitions and Transforms",
    description: "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms.",
    src: "img/css/css_05.png",
    id: "css-5"
  },
  {
    title: "Bootstrap 4 Basics",
    description: "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time.",
    src: "img/css/css_06.png",
    id: "css-6"
  }
  ];
  
const HTMLCourses =[
    {
      title: "How to Make a Website",
      description: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
      src: "img/html/html_01.png",
      id: "html-1"
    },
    {
      title: "HTML Forms",
      description: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
      src: "img/html/html_02.png",
      id: "html-2"
    },
    {
      title: "HTML Video and Audio",
      description: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
      src: "img/html/html_03.png",
      id: "html-3"
    },
    {
      title: "SVG Basics",
      description: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
      src: "img/html/html_04.png",
      id: "html-4"
    },
    {
      title: "Responsive Images",
      description: "Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.",
      src: "img/html/html_05.png",
      id: "html-5"
    },
    {
      title: "Introduction to HTML and CSS",
      description: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like. ",
      src: "img/html/html_06.png",
      id: "html-6"
    }
  ];
  
const JSCourses = [
  {
    title:"JavaScript Basics",
    description:"JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.",
    src:"img/javascript/js_01.png",
    id: "js-1"
  },
  {
    title:"JavaScript Loops, Arrays and Objects",
    description:"Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.",
    src:"img/javascript/js_02.png",
    id: "js-2"
  },
  {
    title: "jQuery Basics",
    description: "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.",
    src: "img/javascript/js_03.png",
    id: "js-3"
  },
  {
    title: "AJAX Basics",
    description: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server.",
    src: "img/javascript/js_04.png",
    id: "js-4"
  },
  {
    title: "Interactive Web Pages with JavaScript",
    description: "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward.",
    src: "img/javascript/js_05.png",
    id: "js-5"
  },
  {
    title: "Node.js Basics",
    description: "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform.",
    src: "img/javascript/js_06.png",
    id: "js-6"
  }
];