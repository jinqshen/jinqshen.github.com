import { connect } from 'react-redux';
import { getProductsByQuery, followProduct, putProduct } from '../actions/product';
import Shopping from '../../components/Shopping';

const mapStateToProps = state => {
    console.log(state.products);
    return {
        products: state.products,
        productInCar: state.products.filter(product => product.isPut)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductsByQuery: query => {
            dispatch(getProductsByQuery(query));
        },
        followProduct: id => {
            dispatch(followProduct(id));
        },
        putProduct: id => {
            dispatch(putProduct(id));
        }
    }
}

const Shop = connect(
    mapStateToProps,
    mapDispatchToProps
)(Shopping);

export default Shop;
