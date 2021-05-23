import React, { useState } from "react";
import axios from "axios";
import { HOME_BODY } from "../../../components/Home/HomeBody";
import { HOME_WRAPPER } from "../../../components/Home/HomeWrapper";
import { baseUrl, cases } from "../../../common/variables";
import { useQuery } from "react-query";
import { HOME_ITEMS_WRAPPER } from "../../../components/Home/HomeItemsWrapper";
import Pagination from "@material-ui/lab/Pagination";
import { HOME_PAGINATION_WRAPPER } from "../../../components/Home/HomePaginationWrapper";
import { HOME_APP_BAR } from "../../../components/Home/HomeAppBar";
import { LOGO_LINK } from "../../../components/AuthHome/LogoLink";
import { LOGO_WHITE } from "../../../components/Global/Logo_white";
import { Wrapper } from "../../../components/Global/Wrapper";
import HomeNavMenu from "./HomeAppBar/HomeNavMenu";
import HomeItemsList from "./HomeBody/HomeItemsList";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Divider } from "@material-ui/core";
import { regions } from "../../../common/regions";
import HomeChooseItemType from "./HomeBody/HomeChooseItemType";
import HomePostSelectRegion from "./HomePostDialog/HomePostSelectRegion";

const fetchPage = async (page: Number, region: String, itemType: String) => {
  try {
    const response = await axios.get(
      baseUrl +
        `/api/item/getAllItems?page=${page}&limit=7&region=${region}&case=${itemType}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const Home = () => {
  const [region, setRegion] = useState(regions[0]);
  const [itemType, setItemType] = useState(cases[0]);
  const [page, setPage] = useState(1);
  const { data, isFetching, isError } = useQuery(
    ["page", page, region, itemType],
    () => fetchPage(page, region, itemType),
    {
      keepPreviousData: true,
    }
  );

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (isFetching) return <LoadingPage />;
  if (isError === true) return <ErrorPage />;

  return (
    <HOME_WRAPPER>
      <HOME_APP_BAR>
        <LOGO_LINK>
          <LOGO_WHITE />
        </LOGO_LINK>

        <Wrapper>
          <HomeNavMenu />
        </Wrapper>
      </HOME_APP_BAR>
      <HOME_BODY>
        <Wrapper
          padding="10px 10px 0px 10px"
          displayType="flex"
          contentJustification="center"
          alignment="center"
        >
          <HomeChooseItemType
            itemType={itemType}
            setItemType={setItemType}
            includeAll={true}
          />
          <Wrapper width="10px"></Wrapper>
          <HomePostSelectRegion region={region} setRegion={setRegion} />
        </Wrapper>
        <Divider />
        <HOME_ITEMS_WRAPPER>
          <HomeItemsList data={data} />
          <HOME_PAGINATION_WRAPPER>
            <Pagination
              count={Math.ceil(data.totalPages / data.limit)}
              page={page}
              color="secondary"
              onChange={handlePaginationChange}
            />
          </HOME_PAGINATION_WRAPPER>
        </HOME_ITEMS_WRAPPER>
      </HOME_BODY>
    </HOME_WRAPPER>
  );
};

export default Home;
