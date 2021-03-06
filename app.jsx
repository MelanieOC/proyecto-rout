class Home extends React.Component {
  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course
        library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
        skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our
        library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>About</h2>
        <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
      </div>
    );
  }
}

class Teachers extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>Teachers</h2>
        <ul className='group'>
          {
            TeacherList.map(item => {
              return (
                <li className='teacher' key={item.id}>
                  <img className='teacher-img' src={item.src} alt='teacher' />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class Courses extends React.Component {
  render() {
    const { route } = this.props;
    let CurrentList = null;
    switch (route) {
      case 'html':
        CurrentList = HTMLCourses;
        break;
      case 'css':
        CurrentList = CSSCourses;
        break;
      case 'javascript':
        CurrentList = JSCourses;
        break;
      default: //'html'
        CurrentList = HTMLCourses;
        break;
    }
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <ul className="course-nav">
            <li ><a className={CurrentList === HTMLCourses ? 'active' : ''} href='#/courses/html'>HTML</a></li>
            <li ><a className={CurrentList === CSSCourses ? 'active' : ''} href='#/courses/css'>CSS</a></li>
            <li ><a className={CurrentList === JSCourses ? 'active' : ''} href='#/courses/javascript'>JavaScript</a></li>
          </ul>
        </div>
        <ul>
          {
            CurrentList.map(item => {
              return (
                <li className='course media group' key={item.id} >
                  <img className='course-img' src={item.src} alt='course' />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForCourses = null;
    switch (this.state.route) {
      case '/home':
        Child = Home;
        break;
      case '/about':
        Child = About;
        break;
      case '/teachers':
        Child = Teachers;
        break;
      case '/courses':
        Child = Courses;
        break;
      case '/courses/html':
        Child = Courses;
        propsForCourses = 'html';
        break;
      case '/courses/css':
        Child = Courses;
        propsForCourses = 'css';
        break;
      case '/courses/javascript':
        Child = Courses;
        propsForCourses = 'javascript';
        break;
      default:
        Child = Home;
    }
    return (
      <div className='content'>
        <header>
          <span className='icono'>
            <i className="material-icons">code</i>
          </span>
          <ul className='main-nav'>
            <li>
              <a className={Child === Home ? 'active' : ''} href="#/home" >Home</a>
            </li>
            <li>
              <a className={Child === About ? 'active' : ''} href="#/about">About</a>
            </li>
            <li>
              <a className={Child === Teachers ? 'active' : ''} href="#/teachers" >Teachers</a>
            </li>
            <li>
              <a className={Child === Courses ? 'active' : ''} href="#/courses">Courses</a>
            </li>
          </ul>
        </header>
        {
          propsForCourses ? <Child route={propsForCourses} /> : <Child />
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));