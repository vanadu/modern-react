import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// !VA Don't forget that the faker component must be installed via npm install --save faker!

// !VA All the values that appear in the child components are defined as props here on the CommentDetail component. CommentDetail is embedded in the ApprovalCard component. I'm not sure I understand why the harded coded ApprovalCard Warning content displays in the props object in the console. I guess because this is ApprovalCard content, not CommentDetail content. So the first ApprovalCard component has no CommentDetail component. Its content is passed down as {children} while the other CommentDetail content is explicitly passed down within that component. Very confusing. Well, of course - the {children} prop shows the CONTENTS of the ApprovalCard tag, which is NOT a self-closing tag, but rather has an opening and closing tag!!! So the {children} prop refers to it in that context, and to the CommentDetail component in the context where the CommentDetail component is provided. In short, the {children} prop refers to everything inside the opening and closing ApprovalCard tag, whether it has a child component or not.
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
