import React from 'react';
import './CartProduct.scss';

const CartProduct = () => {
  return (
    <div id="cartProduct">
      <div className="cartProductTop">
        <span>전통주</span>
        <span className="freeDelevery">무료배송!</span>
      </div>
      <div className="cartProductBottom">
        <input className="cartProductCheck" type="checkbox" />
        <div className="btnRight">
          <div className="cartProductDetail">
            <div className="showCartProduct">
              <img
                className="cartProductImg"
                alt="cartProductImg"
                src="https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg"
              />
              <div className="productOption">
                <div className="productNameAndOption">
                  <div className="CartProductName">오미로제 프리미어</div>
                  <button className="cartDeleteProduct">X</button>
                </div>
                <input
                  list="cartProductOptionReCheck"
                  className="cartProductOptionReCheck"
                  placeholder="옵션 선택"
                />
                <datalist id="cartProductOptionReCheck">
                  <option value="500ml, Medium 사이즈" />
                  <option value="750ml, Large 사이즈" />
                </datalist>
              </div>
            </div>
            <div className="cartProductCountAndPrice">
              <div className="cartProductCountBtn">
                <button className="productCounterBtn">+</button>
                <div className="productCount">1</div>
                <button className="productCounterBtn">-</button>
              </div>
              <span className="cartProductPrice">30,000원</span>
            </div>
          </div>
          <div className="aProductDetailPrice">
            <div className="aProductDetail">
              <span>상품금액</span>
              <span>30,000원</span>
            </div>
            <div className="aProductDetail">
              <span>즉시할인금액</span>
              <span>0원</span>
            </div>
            <div className="aProductDetail">
              <span>배송비</span>
              <span>0원</span>
            </div>
            <div className="aProductWholeDetail">
              <span>총 금액</span>
              <span className="aProductWholePrice">30,000원</span>
            </div>
          </div>
          <button className="SeeMoreProductOfShop">양조장 상품 더보기</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
