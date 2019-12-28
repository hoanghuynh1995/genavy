import React, { Component } from 'react'
import TodoItem from '../../components/TodoItem';
import * as actions from './actions';
import styles from './style.module.scss'
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';

import { connect } from 'react-redux';

// assets

import featureIcon1 from '../../img/icons/1.png';
import featureIcon2 from '../../img/icons/2.png';
import featureIcon3 from '../../img/icons/3.png';

import product1 from '../../img/product/21083280_214064282458341_4741417542166202717_o.jpg';
import product2 from '../../img/product/21014026_213741019157334_6226774785134510841_o.jpg';
import product3 from '../../img/product/21015952_213393712525398_4003645853213865018_o.jpg';
import product4 from '../../img/product/20988546_213106302554139_5223918503180820475_o.jpg';
import product5 from '../../img/product/20954108_213054865892616_7492540235105946932_n.jpg';
import product6 from '../../img/product/20988588_212718572592912_5124867115000102829_o.jpg';

import topProduct1 from '../../img/product/20901482_212381395959963_4938028091824604145_o.jpg';
import topProduct2 from '../../img/product/20900618_212174529313983_1296944694265651481_o.jpg';
import topProduct3 from '../../img/product/20861659_211662936031809_7523243381824193503_o.jpg';
import topProduct4 from '../../img/product/20861987_211357322729037_117492400485900510_o.jpg';
import topProduct5 from '../../img/product/20861561_210981582766611_5525529372619861327_o.jpg';
import topProduct6 from '../../img/product/20786124_210642002800569_6512039724383331759_o.jpg';
import topProduct7 from '../../img/product/20664023_208111973053572_6378333450310192477_n.jpg';
import topProduct8 from '../../img/product/20622046_207964423068327_5016245095752914025_n.jpg';

import { Header } from '../../components/Header/index';

const { Content, Footer } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }
  addItem = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.inputVal,
      key: Date.now(),
    });
  }
  deleteItem = i => {
    this.props.deleteTodo(i);
  }
  componentDidUpdate() {
    // this.props.inputElement.current.focus()
    // console.log('componentDidUpdate');
  }
  handleChange = event => {
    this.setState({
      inputVal: event.target.value
    })
  }
  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <section className="hero-section">
            <div className="hero-slider">
              <Carousel {...{
                dots: true,
                dotPosition: 'bottom'
              }}>
                <div className={`${styles['hero-bg-1']} hs-item set-bg`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7 text-white">
                        <span>New Arrivals</span>
                        <h2>denim jackets</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <a href="#" className="site-btn sb-line">DISCOVER</a>
                        <a href="#" className="site-btn sb-white">ADD TO CART</a>
                      </div>
                    </div>
                    <div className="offer-card text-white">
                      <span>from</span>
                      <h2>$29</h2>
                      <p>SHOP NOW</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['hero-bg-2']} hs-item set-bg`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7 text-white">
                        <span>New Arrivals</span>
                        <h2>denim jackets</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <a href="#" className="site-btn sb-line">DISCOVER</a>
                        <a href="#" className="site-btn sb-white">ADD TO CART</a>
                      </div>
                    </div>
                    <div className="offer-card text-white">
                      <span>from</span>
                      <h2>$29</h2>
                      <p>SHOP NOW</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </section>
          <section className="features-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 p-0 feature">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={featureIcon1} alt="#" />
                    </div>
                    <h2>Fast Secure Payments</h2>
                  </div>
                </div>
                <div className="col-md-4 p-0 feature">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={featureIcon2} alt="#" />
                    </div>
                    <h2>Premium Products</h2>
                  </div>
                </div>
                <div className="col-md-4 p-0 feature">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={featureIcon3} alt="#" />
                    </div>
                    <h2>Free & fast Delivery</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="top-letest-product-section">
            <div className="container">
              <div className="section-title">
                <h2>LATEST PRODUCTS</h2>
              </div>
              <Carousel {...{ dots: true, autoplay: false, slidesToShow: 4 }}>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <div className="img-container-center" style={{ height: '267px' }}>
                      <img src={product1} alt="" />
                    </div>
                    <div className="pi-links">
                      <a href="#" className="add-card" style={{ 'marginRight': '5px' }}><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Fossil of Wood </p>
                  </div>
                </div>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <div className="tag-new">New</div>
                    <img src={product2} alt="" />
                    <div className="pi-links">
                      <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Aphrodite</p>
                  </div>
                </div>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <img src={product3} alt="" />
                    <div className="pi-links">
                      <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Storm stone </p>
                  </div>
                </div>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <img src={product4} alt="" />
                    <div className="pi-links">
                      <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Kyanite </p>
                  </div>
                </div>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <div className="img-container-center" style={{ height: '267px' }}>
                      <img src={product5} alt="" />
                    </div>
                    <div className="pi-links">
                      <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Diopside </p>
                  </div>
                </div>
                <div className={`${styles['product-item-p']} product-item`}>
                  <div className="pi-pic">
                    <img src={product6} alt="" />
                    <div className="pi-links">
                      <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                      <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>$35,00</h6>
                    <p>Granat </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </section>
          <section className="product-filter-section">
            <div className="container">
              <div className="section-title">
                <h2>BROWSE TOP SELLING PRODUCTS</h2>
              </div>
              <ul className="product-filter-menu">
                <li><a href="#">TOPS</a></li>
                <li><a href="#">JUMPSUITS</a></li>
                <li><a href="#">LINGERIE</a></li>
                <li><a href="#">JEANS</a></li>
                <li><a href="#">DRESSES</a></li>
                <li><a href="#">COATS</a></li>
                <li><a href="#">JUMPERS</a></li>
                <li><a href="#">LEGGINGS</a></li>
              </ul>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{height: '264px'}}>
                        <img src={topProduct1} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Thạch anh hồng </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="tag-sale">ON SALE</div>
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct2} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Obsidian Hư Không Tạng Bồ Tát</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct3} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Nhẫn Mã não đỏ </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct4} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Mặt Phật Di Lạc đá mắt hổ vàng </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct5} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Moonstone </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct6} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Aquamarine</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct7} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Vòng tay Tourmaline </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="img-container-center" style={{ height: '264px' }}>
                        <img src={topProduct8} alt="" />
                      </div>
                      <div className="pi-links">
                        <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                        <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                      </div>
                    </div>
                    <div className="pi-text">
                      <h6>$35,00</h6>
                      <p>Vòng tay Mắt hổ xanh đen </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-5">
                <button className="site-btn sb-line sb-dark">LOAD MORE</button>
              </div>
            </div>
          </section>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)