import React from 'react';
import Button from '../../components/Button';
import Subscribe from '../../components/Subscribe';
import Header from '../../components/Header';

import './styles.scss';

const Landing = () => (
  <>
    <Header className="landing-header" />
    <main>
      <section className="lead">
        <div className="lead__wrapper container">
          <div className="lead__content">
            <h2 className="lead__title"><b>Brainstorming</b> for desired perfect Usability</h2>
            <p className="lead__text">
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <Button className="lead__button" inverted>View Stats</Button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="features__title">Why<b> small business owners <br></br> love</b> AppCo?</h2>
          <p className="features__text">
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
          </p>
          <ul className="features__list">
            <li>
              <article className="features__item features__item--design">
                <h3 className="features__item-title">Clean Design</h3>
                <p>Increase sales by showing true dynamics of your website.</p>
              </article>
            </li>
            <li>
              <article className="features__item features__item--data">
                <h3 className="features__item-title">Secure Data</h3>
                <p>Build your online store’s trust using Social Proof & Urgency.</p>
              </article>
            </li>
            <li>
              <article className="features__item features__item--retina">
                <h3 className="features__item-title">Retina Ready</h3>
                <p>Realize importance of social proof in customer’s purchase decision.</p>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="advantage">
        <div className="container advantage__wrapper">
          <div className="advantage__content">
            <h2 className="advantage__title">Start Managing your apps business, more faster</h2>
            <p className="advantage__text">
              Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.
            </p>
            <Button className="advantage__button" inverted>Learn more</Button>
          </div>
        </div>
      </section>
      <section className="pricing">
        <div className="container">
          <div className="pricing__content">
            <h2 className="pricing__title"><b>Afforadble Pricing and Packages</b><br></br>choose your best one</h2>
            <p className="pricing__text">
              Monotonectally grow strategic process improvements vis-a-vis integrated resources.
            </p>
            <ul className="pricing__list">
              <li>
                <article className="pricing__item pricing__item--basic">
                  <h3 className="pricing__item-title">Basic</h3>
                  <div className="pricing__item-cost">$29</div>
                  <p className="pricing__item-desctiption">
                    Push Notifications Data Transfer SQL Database Search & SEO Analytics
                    24/7 Phone Support 2 months technical support 2+ profitable keyword
                  </p>
                  <Button className="pricing__button">Purchase now</Button>
                </article>
              </li>
              <li>
                <article className="pricing__item pricing__item--standard pricing__item--selected">
                  <h3 className="pricing__item-title">Standard</h3>
                  <div className="pricing__item-cost pricing__item-cost--selected">$149</div>
                  <p className="pricing__item-desctiption">
                    Push Notifications Data Transfer SQL Database Search & SEO Analytics
                    24/7 Phone Support 2 months technical support 2+ profitable keyword
                  </p>
                  <Button className="pricing__button">Purchase now</Button>
                </article>
              </li>
              <li>
                <article className="pricing__item pricing__item--unlimited ">
                  <h3 className="pricing__item-title">Unlimited</h3>
                  <div className="pricing__item-cost">$39</div>
                  <p className="pricing__item-desctiption">
                    Push Notifications Data Transfer SQL Database Search & SEO Analytics
                    24/7 Phone Support 2 months technical support 2+ profitable keyword
                  </p>
                  <Button className="pricing__button">Purchase now</Button>
                </article>
              </li>
            </ul>
            <p className="pricing__contact">
                If you need custom services or Need more? <a href="/">Contact us</a>
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="landing-footer">
      <div className="container">
        <div className="landing-footer__top">
          <Subscribe />
        </div>
        <div className="landing-footer__bottom">
          <p className="landing-footer__column">AppCo</p>
          <p className="landing-footer__column">All rights reserved by ThemeTags</p>
          <p className="landing-footer__column">Copyrights © 2019.</p>
        </div>
      </div>
    </footer>
  </>
);

export default Landing;
