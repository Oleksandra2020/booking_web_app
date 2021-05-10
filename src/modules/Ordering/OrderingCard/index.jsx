import {
  Card,
  Typography,
  CardContent,
  // CardMedia,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles.module.css";
import Switch from "../../Switch/index";
import RoundCheckBox from "../../RoundCheckBox/index";
import NameInput from "../NameInput/index";
import SurnameInput from "../SurnameInput/index";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text: {
    color: "gray",
  },
  media: {
    paddingTop: "80%", // 16:9
  },
});

function OrderingCard({ trainNumber, place, price }) {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h3">
              142П Бахмут-Львів
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Київ-Пасажирський Пн, 24.02 13:34
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Львів Вт, 24.02 04:30
            </Typography>
            <Typography variant="h5" component="h3">
              Вагон: {trainNumber} Місце: {place}
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Плацкарт
            </Typography>
            <div className={styles.checkBox_elem}>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>Без напою</span>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>1 чай</span>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>2 чая</span>
            </div>
            <div className={styles.checkBox_elem}>
              <Switch />
              <span className={styles.checkBox__text}>Постільна білизна</span>
            </div>
            <div>
              <SurnameInput />
            </div>
            <NameInput />
            <div className={styles.checkBox_elem}>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>Без пільг</span>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>Пільговий</span>
            </div>
            <div className={styles.checkBox_elem}>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>Студентський</span>
              <RoundCheckBox />
              <span className={styles.checkBox__text}>Дитячий</span>
            </div>
            <h1 className={styles.summ}>Ціна: {price}</h1>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

OrderingCard.propTypes = {
  trainNumber: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderingCard;
