/**
 *
 * HomeTopNews
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomeTopNews from './selectors';
import reducer from './reducer';

const TopNews = styled.section`
  margin-top: 30px;
`;

const TopNewsTitle = styled.h2`
  color: ${props => props.theme.color.main};
  font-weight: 700;
`;

const TopNewsWrapper = styled.div`
  margin-bottom: 50px;
`;

const FeaturedNews = styled.article`
  position: relative;
`;

const FeaturedNewsImage = styled.img`
  border-radius: 15px;
`;

const FeaturedNewsContent = styled.div`
  position: absolute;
  margin-top: -50px;
  top: 100%;
  width: calc(100% - 25px);
  right: 0;
  padding: 15px 25px;
  border-radius: 15px 0 0 15px;
  background: ${props => props.theme.color.pureWhite};
`;

const FeaturedNewsDate = styled.time`
  display: block;
`;

const FeaturedNewsTitle = styled.h3`
  font-weight: 700;
  color: ${props => props.theme.color.black};
`;

const FeaturedNewsExceprt = styled.p`
  line-height: 1.5;
`;

const OtherNews = styled.article``;

export function HomeTopNews({ homeTopNews }) {
  const { news } = homeTopNews;

  const featuredNews = news[0];

  // const otherNews = [news[1], news[2], news[3], news[4]];

  useInjectReducer({ key: 'homeTopNews', reducer });

  return (
    <TopNews className="container">
      <TopNewsTitle>Top News</TopNewsTitle>
      <TopNewsWrapper className="row">
        <div className="col-12 col-md-6">
          <FeaturedNews>
            <div className="embed-responsive embed-responsive-16by9">
              <FeaturedNewsImage
                alt={featuredNews.title}
                className="embed-responsive-item"
                src={featuredNews.thumbnailUrl}
              />
            </div>

            <FeaturedNewsContent>
              <FeaturedNewsDate>{featuredNews.publishDate}</FeaturedNewsDate>
              <FeaturedNewsTitle>{featuredNews.title}</FeaturedNewsTitle>
              <FeaturedNewsExceprt>{featuredNews.excerpt}</FeaturedNewsExceprt>
            </FeaturedNewsContent>
          </FeaturedNews>
        </div>
        <div className="col-12 col-md-6">
          <OtherNews />
        </div>
      </TopNewsWrapper>
    </TopNews>
  );
}

HomeTopNews.propTypes = {
  homeTopNews: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  homeTopNews: makeSelectHomeTopNews(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomeTopNews);
