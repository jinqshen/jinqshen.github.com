import React from 'react';
import { Carousel, Row, Col, Input, AutoComplete, Badge, Card, Tooltip, Tag } from 'antd';
import { SearchOutlined, CameraOutlined, ShoppingCartOutlined, HeartTwoTone, ShoppingTwoTone } from '@ant-design/icons';

const { Search } = Input;
const requireContext = require.context("../public/img/shop/", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);

const { Meta } = Card;

export default class Shopping extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search_condition: '',
            options: [],
            products: 0
        }
    }

    componentWillMount = () =>{
        this.productList = ['小米手机', 'AMD 3600', 'iphone SE', 'mac book Air', 'mac book pro'];
    }

    getRecommend = () => {
        this.props.recommendList = [];
        let randomIndex = Math.ceil(Math.random(0, this.props.recommendList.length));
        return this.props.recommendList[randomIndex];
    }

    onSelect = value => {
        this.setState({
            search_condition: value
        });
        this.handleSearch(value);
    }

    searchResult = query => {
        let queryRegExp = new RegExp(query);
        return this.productList.filter(value => value.match(queryRegExp)).map(value => ({
            value: value,
            label: (<div style={{display: 'flex', justifyContent: 'space-between'}}><span>{value}</span></div>)
        }));
    }

    handleSearch = value => {
        let options = value ? this.searchResult(value) : [];
        this.setState({
            search_condition: value,
            options: options
        });
    }

    render() {
        return (
            <>
                <Row justify="center" gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]} align="middle">
                    <Col span={10}>
                        <AutoComplete 
                            dropdownMatchSelectWidth={400}
                            style={{width:'100%'}}
                            options={this.state.options}
                            onSelect={this.onSelect}
                            onSearch={this.handleSearch}>
                            <Search suffix={<CameraOutlined />} prefix={<SearchOutlined />} placeholder={this.props.recommend} value={this.state.search_condition} enterButton="搜索" onSearch={(value) => {this.props.getProductsByQuery(value)}}></Search>
                        </AutoComplete>
                    </Col>
                    <Col span={6}>
                        <Row align="middle">
                            <Col>我的购物车</Col>
                            <Col>
                                <Badge count={this.props.productInCar.length} showZero>
                                    <ShoppingCartOutlined style={{ fontSize:28 }} />
                                </Badge>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={20}>
                        <Carousel autoplay>
                            { images.map(image => <img height={300} key={image} src={image} alt=""></img>) }
                        </Carousel>
                    </Col>
                </Row>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                    {this.props.products.filter(product => product.isVisibility).map(product => {
                        let id = product.productId;
                        return (
                            <Col span={6} key={product.productId}>
                                <Card cover={<img alt="mouse" src={product.productCover} />}
                                    actions={[
                                        <Tooltip title="关注"><a onClick={() => this.props.followProduct(id)}><HeartTwoTone twoToneColor={product.isFollow ? '#eb2f96' : '#4d4d4e'} /></a></Tooltip>,
                                        <Tooltip title="加入购物车"><a onClick={() => this.props.putProduct(id)}><ShoppingTwoTone twoToneColor={product.isPut ? '#eb2f96' : '#4d4d4e'} /></a></Tooltip>
                                    ]}>
                                    <Meta title={<span style={{color: 'red', fontSize: 20}}>{'￥' + product.productPrice}</span>}
                                        description={<><Row gutter={[{xs: 4, sm: 4, md: 8, lg: 8}, {xs: 4, sm: 4, md: 8, lg: 8}]}><Col span={24}>{product.abstract}</Col><Col span={24}><Tag color="red">{product.shop}</Tag></Col><Col span={24}>{product.isSelf ? <Tag color="#f50">自营</Tag> : <Tag color="#fff"></Tag>}</Col></Row></>} />
                                </Card>
                            </Col>
                        )
                    })}
                    

                </Row>
            </>
        )
    }
}