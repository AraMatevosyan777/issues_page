import {
  ADD_ISSUE,
  SHOW_DRAWER,
  ADD_LABEL,
  DELETE_LABEL,
  ADD_COMMENT,
  IS_OPEN,
  EDIT_ISSUE,
  DELETE_ISSUE,
} from './actions';

const initialState = {
  issues: [
    {
      id: 1,
      title: 'unable to create-react-app using npx install command',
      description:
        'Hi All, I am trying to create a new app using create-react-app command. Below is the command used and the command is getting stuck in installing react,  I have Following versions: I tried clearing cache, re-installing node.js, restarted the system. My internet speed is fine. I dont know what the issue is. Could someone please help how can I get an app created? Thanks in advance! Harry',
      labels: [{ id: 1, title: 'CLA Signed', bgc: '#009900' }],
      comments: [
        {
          id: 1,
          comment:
            "If you've previously installed create-react-app globally via npm install -g create-react-app, then uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.",
        },
        {
          id: 2,
          comment:
            'Thanks for your concern Well i tried it but it cound not resolve the issue',
        },
      ],
      isOpen: false,
    },
    {
      id: 2,
      title: "Dependencies pulled down don't match repo",
      description:
        "It looks like v3.4.1 of react-scripts was last published to NPM four months ago - and so the dependency versions that I get don't match what is currently listed in the latest version of its package.json (e.g., webpack-dev-server 3.10.3 vs. 3.11.0 as an example, which came from this commit, even though package.json in the repo continues to shows 3.4.1 through several pushes). Does a new version need to be published out to npm? I need to take the dependency versions currently listed to get around a noted security vulnerability with webpack-dev-server 3.10.3 (really, with it's dependency on an older version of jquery).",
      labels: [
        { id: 16, title: 'needs triage', bgc: '#b5274d' },
        { id: 1, title: 'CLA Signed', bgc: '#009900' },
      ],
      comments: [],
      isOpen: true,
    },
    {
      id: 3,
      title: 'Error',
      description:
        "I write create-react-app myapp, after all installations I write npm start, and an error appears. Why?{Failed to compile.Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.configuration.module.rules[2].oneOf[1].include: The provided value  contains exclamation mark (!) which is not allowed because it's reserved for loader syntax.npm ERR! code ELIFECYCLE npm ERR! errno 1 npm ERR! bisness@0.1.0 start: react-scripts start npm ERR! Exit status 1 npm ERR!npm ERR! Failed at the bisness@0.1.0 start script. npm ERR! This is probably not a problem with npm. There is likely additional logging output above.npm ERR! A complete log of this run can be found in: npm ERR!   to compile. Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.",
      labels: [
        { id: 16, title: 'needs triage', bgc: '#b5274d' },
        { id: 12, title: 'issue: bug report', bgc: '#f49118' },
        { id: 1, title: 'CLA Signed', bgc: '#009900' },
      ],
      comments: [],
      isOpen: true,
    },
    {
      id: 4,
      title: 'EMISSINGARG ',
      description:
        "I write create-react-app myapp, after all installations I write npm start, and an error appears. Why?{Failed to compile.Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.configuration.module.rules[2].oneOf[1].include: The provided value  contains exclamation mark (!) which is not allowed because it's reserved for loader syntax.npm ERR! code ELIFECYCLE npm ERR! errno 1 npm ERR! bisness@0.1.0 start: react-scripts start npm ERR! Exit status 1 npm ERR!npm ERR! Failed at the bisness@0.1.0 start script. npm ERR! This is probably not a problem with npm. There is likely additional logging output above.npm ERR! A complete log of this run can be found in: npm ERR!   to compile. Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.",
      labels: [
        { id: 8, title: 'difficulty: starter', bgc: '#c5def5' },
        { id: 9, title: 'good first issue', bgc: '#128A0C' },
      ],
      comments: [],
      isOpen: true,
    },
    {
      id: 5,
      title: 'TS Watch mode recompiling stuck ',
      description:
        "I write create-react-app myapp, after all installations I write npm start, and an error appears. Why?{Failed to compile.Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.configuration.module.rules[2].oneOf[1].include: The provided value  contains exclamation mark (!) which is not allowed because it's reserved for loader syntax.npm ERR! code ELIFECYCLE npm ERR! errno 1 npm ERR! bisness@0.1.0 start: react-scripts start npm ERR! Exit status 1 npm ERR!npm ERR! Failed at the bisness@0.1.0 start script. npm ERR! This is probably not a problem with npm. There is likely additional logging output above.npm ERR! A complete log of this run can be found in: npm ERR!   to compile. Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.",
      labels: [
        { id: 4, title: 'dependencies', bgc: '#0366d6' },
        { id: 5, title: 'difficulty: complex', bgc: '#f9d0c4' },
      ],
      comments: [],
      isOpen: true,
    },
  ],
  showDrawer: false,
};
const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.issue],
      };
    case SHOW_DRAWER:
      return {
        ...state,
        showDrawer: action.boolean,
      };
    case ADD_LABEL:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return { ...issue, labels: [...issue.labels, action.label] };
          }
          return issue;
        }),
      };
    case DELETE_LABEL:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.issueId) {
            return {
              ...issue,
              labels: issue.labels.filter((label) => {
                if (label.id !== action.labelId) {
                  return label;
                }
                return null;
              }),
            };
          }
          return issue;
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return {
              ...issue,
              comments: [...issue.comments, action.comment],
            };
          }
          return issue;
        }),
      };
    case IS_OPEN:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return {
              ...issue,
              isOpen: !action.isOpen,
            };
          }
          return issue;
        }),
      };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id !== action.id),
      };
    case EDIT_ISSUE:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.issue.id) {
            return {
              ...issue,
              title: action.issue.title,
              description: action.issue.description,
            };
          }
          return issue;
        }),
      };
    default:
      return state;
  }
};

export default issuesReducer;
