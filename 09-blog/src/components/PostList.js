import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/fetchPostsAndUsers";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    const renderDatas = async () => {
      // await this.props.fetchPosts();
      this.props.fetchPostsAndUsers();
    };

    renderDatas();
  }

  renderPosts() {
    const renderedPosts = this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id} style={{ marginBottom: "40px" }}>
          <i className="larged middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2 className="title">{post.title}</h2>
              <p>{post.body}</p>
            </div>

            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });

    return renderedPosts;
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>

        <div className="ui comment">
          {this.props.posts ? this.renderPosts() : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
