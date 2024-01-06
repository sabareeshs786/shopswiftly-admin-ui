import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import { Box, Tab } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemContext, { ItemContextProvider } from '../context/ItemContextProvider';
import ItemListPagination from './ItemListPagination';
import LoadingAnimation from './LoadingAnimation';
import Brands from './Brands';
import Products from './Products';
import Inventory from './Inventory';
import '../css/tables.css';

function Home() {

    const { tabNumber, handleTabChange, brand, queryParams, range, pathname, navigate } = useContext(ItemContext);
    const [itemDataArr, setItemDataArr] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [loading, setLoading] = useState(false);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const MyBox = styled(Box)({
        width: "100%",
        padding: 0,
        height: 'auto'
    });

    const MyTab = styled(Tab)({
        textTransform: "none",
        opacity: 1,
        color: 'black',
        fontSize: '1rem'
    });

    const LogoTab = () => (
        <Box display="flex" alignItems="center">
            <img src="/shopswiftly-blue.png" alt="Logo" style={{ marginRight: '8px', width: '120px', height: '24px' }} />
        </Box>
    );

    const MyTabPanel = styled(TabPanel)({
        padding: 0
    })

    const StyledLink = styled(Link)({
        textDecoration: "none",
        color: 'inherit'
    })

    return (
            <MyBox sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={tabNumber}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="Sort By Tab">
                            <Tab label={<LogoTab />} value={"0"} disabled />
                            <MyTab label={<StyledLink to="/brands">Brands</StyledLink>} value="1" />
                            <MyTab label={<StyledLink to="/brands">Products</StyledLink>} value="2" />
                            <MyTab label={<StyledLink to="/brands">Inventory</StyledLink>} value="3" />
                        </TabList>
                    </Box>
                    <MyTabPanel value="1">
                        <Brands />
                    </MyTabPanel>
                    <MyTabPanel value="2">
                        <Products />
                    </MyTabPanel>
                    <MyTabPanel value="3">
                        <Inventory />
                    </MyTabPanel>
                </TabContext>
            </MyBox>
    )
}

export default Home;