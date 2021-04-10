import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say something...</h3>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
        className="form my-1"
      >
        <textarea
          name="text"
          cols="20"
          rows="5"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Create a Post"
        ></textarea>
        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
