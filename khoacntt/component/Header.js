import {
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/logo.png";
import styles from "../styles/jss/component/headerStyle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const useStyle = makeStyles(styles);

export default function Header() {

  const [open, setOpen] = useState(false);
  
  let posts = [];
  posts = useSelector(state => state.posts.posts);


  const classes = useStyle();

  const handleDrawerOpen = (status) => {
    setOpen(status);
  };

  const drawItemStyle = {
    fontSize: "1.5rem",
    color: "inherit",
  };

  const menuDrawer = (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Image src={logo} alt="Đại học Mở TP.HCM" width="300%" />
          </ListItemAvatar>
        </ListItem>
        <ListItem button>
          <ListItemText primaryTypographyProps={{ style: drawItemStyle }}>
            <Link href="/">Trang chủ</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText primaryTypographyProps={{ style: drawItemStyle }}>
            <Link href="/about">Giới thiệu</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemText primaryTypographyProps={{ style: drawItemStyle }}>
            <Link href="/enrollment">Tuyển sinh</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemText primaryTypographyProps={{ style: drawItemStyle }}>
            <Link href="/post">Tin tức</Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <div className={classes.mobileSection}>
            <IconButton
              onClick={() => handleDrawerOpen(true)}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link href="/">
            <div className={classes.logo}>
              <Image src={logo} alt="Đại học Mở TP.HCM" />
            </div>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Autocomplete
              id="Search.."
              freeSolo
              options={posts}
              getOptionLabel={(option) => option.title}
              renderOption={(option) => {
               return <Link href={'/post/' + option.id} >{option.title}</Link>
              }}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                return (
                  <InputBase
                    {...params.InputProps}
                    {...rest}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    placeholder="Search…"
                  />
                );
              }}
            />
          </div>
          <Grid className={classes.nav} container justifyContent="center">
            <Grid item md={3}>
              <Button
                href="#"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
              >
                <Link href="/">Trang chủ</Link>
              </Button>
            </Grid>
            <Grid item md={3}>
              <Button
                href="#"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
              >
                <Link href="/about">Giới thiệu</Link>
              </Button>
            </Grid>
            <Grid item md={3}>
              <Button
                href="#"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
              >
                <Link href="/enrollment">Tuyển sinh</Link>
              </Button>
            </Grid>
            <Grid item md={3}>
              <Button
                href="#"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
              >
                <Link href="/post">Tin tức</Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Drawer
          anchor="left"
          onClose={() => handleDrawerOpen(false)}
          open={open}
        >
          {menuDrawer}
        </Drawer>
      </AppBar>
    </>
  );
}
