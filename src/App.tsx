import {
  Refine,
  TextField,
} from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";
import authProvider from "auth-provider";
import { CustomSider } from "components";
import { CarrierCreate } from "pages/carriers/create";
import { CarrierEdit } from "pages/carriers/edit";
import { CarrierList } from "pages/carriers/list";
import { CarrierShow } from "pages/carriers/show";
import { Login } from "pages/login";
import { ShipperCreate } from "pages/shippers/create";
import { ShipperEdit } from "pages/shippers/edit";
import { ShipperList } from "pages/shippers/list";
import { ShipperShow } from "pages/shippers/show";
import { UserCreate } from "pages/users/create";
import { UserEdit } from "pages/users/edit";
import { UserList } from "pages/users/list";
import { UserShow } from "pages/users/show";
const { Link } = routerProvider;
const App: React.FC = () => {
  return (
      <Refine
          authProvider={authProvider}
          routerProvider={routerProvider}
          dataProvider={dataProvider("https://my-json-server.typicode.com/nooqta/fmp.db")}
          LoginPage={Login}
          Sider={CustomSider}
            Title={({ collapsed }) => (
                <Link to="/">
                    {collapsed ? (
                        <TextField value="TP" 
                        title="Transportr"
                        style={{
                          display: "flex",
                          margin: "auto",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "12px 24px",
                          fontSize: "24px",
                          color: "white"
                      }}
                         />
                    ) : (
                        <TextField value="Transportr"  style={{
                          display: "flex",
                          margin: "auto",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "12px 24px",
                          fontSize: "24px",
                          color: "white"
                      }}/>
                    )}
                </Link>
            )}
          resources={[
            { 
              name: "carriers", 
              list: CarrierList,
              edit: CarrierEdit,
              show: CarrierShow,
              create: CarrierCreate,
              canDelete: true,
            },
            { 
              name: "shippers", 
              list: ShipperList,
              edit: ShipperEdit,
              show: ShipperShow,
              create: ShipperCreate,
              canDelete: true,
            },
            { 
              name: "users", 
              list: UserList,
              edit: UserEdit,
              show: UserShow,
              create: UserCreate,
              canDelete: true,
            }
          ]}
      />
  );
};

export default App;
