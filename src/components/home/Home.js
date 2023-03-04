import { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Header from "./Header.js";
import './home.css'
import pride from "../../assets/2.png"
import ingredients from '../../assets/3.png'
import Data from "../../Data.js";
import person from '../../assets/person1.jpg'

const Home = () => {
    const proditem = Data.map(item => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img}/>
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button><a href="#">Order now</a></button>
            </div>
        )
    })

    return (
        <Fragment>
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>123346+</h2>
                            <h6>Savings</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>23346+</h2>
                            <h6>photos</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1246+</h2>
                            <h6>rockets</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>12334+</h2>
                            <h6>globes</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={pride} title="prideimg" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum quidem doloribus eos consequatur optio maiores illum</p>
                            <button><a href="#">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                            <h2>We make everything by hand with the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum quidem doloribus eos consequatur optio maiores illum</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li>Harum quibusdam ducimus beatae minus possimus quidem</li>
                                <li>reiciendis perferendis nihil natus, a doloribus qui</li>
                            </ul>
                            <button><a href="#">learn more</a></button>
                        </div>
                        <div className="col-md-6">
                            <img src={ingredients} title="ingredientsimg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Wehn a man's stomach is full it makes no <br/>difference whether he is rich or poor</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Totam, esse impedit tempore velit aut voluptate quis non.</p>
                            <a href="#">Watch our story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore our food</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam doloremque repellat officia aliquam nam facilis et doloribus</p>
                        </div>
                    </div>
                    <div className="row">
                        {proditem}
                    </div>
                </div>
            </section>
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="img">
                                        <img src={person}/>
                                    </div>
                                    <Carousel.Caption>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                                        <h3>Simab Dave - Web Designer</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img">
                                        <img src={person}/>
                                    </div>
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h3>Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Frequently asked questions</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div>
                            <h6>Is Foodera Bread really baked fresh each day?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div>
                            <h6>Can I order your products online?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div>
                            <h6>Do you bake breads containing animal fats or products?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div>
                            <h6>Do you bake breads containing animal fats or products?</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="movable">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="movable-content col-lg-12 col-md-12">
                            <h2>Baked fresh daily by bakers with passion.</h2>
                            <button><a href="#">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sub">
                <div className="container">
                    <div className="row">
                        <div className="sub-content col-lg-12 col-md-12">
                            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.</p>
                            <div className="enter row">
                                <div className="input col-md-8">
                                    <input type="email" className="email" placeholder="Email Address Here"/>
                                </div>
                                <div className="button col-md-4">
                                    <button><a href="#">Subscribe</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default Home;