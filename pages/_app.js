import React from 'react';
import App from 'next/app';

// Data
import about from '../content/about.md';
import team from '../content/ourPeople.md';
import expertise from '../content/expertise.md';
import blog from '../content/blog.md';
import contact from '../content/contactUs.md';
import home from '../content/home.md';
import pricing from '../content/pricing.md';
import privacy from '../content/privacyPolicy.md';
import careers from '../content/careers.md';
import companyDetails from '../content/companyDetails.md';

const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importTeamMembers = async () => {
  const markdownFiles = require
    .context('../content/team', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/team/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const importexpertiseCards = async () => {
  const markdownFiles = require
    .context('../content/expertise', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/expertise/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const postsList = await importBlogPosts();
    const teamMembers = await importTeamMembers();
    const expertiseCards = await importexpertiseCards();
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps, postsList, teamMembers, expertiseCards };
  }

  state = {
    about,
    team,
    teamMembers: this.props.teamMembers,
    expertise,
    expertiseCards: this.props.expertiseCards,
    blog,
    posts: this.props.postsList,
    sortPosts: 'latest',
    contact,
    home,
    pricing,
    privacy,
    careers,
    companyDetails,
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} {...this.state} />;
  }
}
