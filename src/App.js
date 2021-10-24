import logo from "./assets/logo.png";
import "./App.css";
import Table from "./components/Table";
import { useEffect, useReducer, useState } from "react";
import reducerEvents, { SET_EVENTS, UPDATE_EVENT } from "./reducer";
import datasource from "./datasource";
import moment from "moment";
import Modal from "./components/Modal";
import ModalInput from "./components/ModalInput";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(1);
  const [data, dispatch] = useReducer(reducerEvents, []);
  const [rows, setRows] = useState([]);
  const [active, setActive] = useState(1);
  const [openModal, setOpen] = useState(false);
  const [propsObject, setPropsObject] = useState(null);
  const [modalInput, setModalInput] = useState(false);
  const [index, setIndex] = useState(null);
  const [lang, setLang] = useState("de");
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const updateDate = (date, i) =>
    dispatch({ type: UPDATE_EVENT, payload: { date, i } });

  const onClose = () => {
    setOpen(false);
    setPropsObject(null);
  };
  const onCloseInput = () => {
    setModalInput(false);
    setIndex(null);
  };
  useEffect(() => {
    new Promise((resolve, reject) => {
      if (datasource) {
        resolve(datasource());
      } else reject("No data");
    })
      .then((data) => {
        dispatch({ type: SET_EVENTS, payload: data });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const today = moment();
    if (selected === 1) {
      setRows(
        data.filter(
          (i) =>
            i.createdOn > today.valueOf() &&
            moment(i.createdOn).format("MM/DD/YYYY") !==
              today.format("MM/DD/YYYY")
        )
      );
    } else if (selected === 2) {
      setRows(
        data.filter(
          (i) =>
            moment(i.createdOn).format("MM/DD/YYYY") ===
            today.format("MM/DD/YYYY")
        )
      );
    } else if (selected === 3) {
      setRows(
        data.filter(
          (i) =>
            i.createdOn < today.valueOf() &&
            moment(i.createdOn).format("MM/DD/YYYY") !==
              today.format("MM/DD/YYYY")
        )
      );
    }
  }, [data, selected]);
  if (openModal) {
    return (
      <Modal
        onClose={onClose}
        name={propsObject.name}
        region={propsObject.region}
        price={propsObject.price}
        image={propsObject.image_url}
      />
    );
  }
  if (modalInput) {
    return (
      <ModalInput
        updateDate={updateDate}
        onClose={onCloseInput}
        eventIndex={index}
      />
    );
  }

  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} alt="logo" className="logo" />
        {t("head")}
        <button
          onClick={() => {
            lang === "de" ? setLang("en") : setLang("de");
          }}
        >
          Switch Language
        </button>
      </nav>
      <div className="application">
        <h1>{t("header")}</h1>
        <ul>
          <li
            onClick={() => {
              setActive(1);
              setSelected(1);
            }}
            className={active === 1 ? "active" : ""}
          >
            {t("option1")}
          </li>
          <li
            onClick={() => {
              setActive(2);
              setSelected(2);
            }}
            className={active === 2 ? "active" : ""}
          >
            {t("option2")}
          </li>
          <li
            onClick={() => {
              setActive(3);
              setSelected(3);
            }}
            className={active === 3 ? "active" : ""}
          >
            {t("option3")}
          </li>
        </ul>
        <Table
          data={rows}
          selected={selected}
          setOpen={setOpen}
          setModalInput={setModalInput}
          setPropsObject={setPropsObject}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default App;
