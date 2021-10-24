import Imageitem from "./Imageitem";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Table = ({ data, setIndex, setOpen, setModalInput, setPropsObject }) => {
  const { t } = useTranslation();
  const csvCreator = () => {
    return encodeURI(
      "data:text/csv;charset=utf-8," +
        Object.keys(data[0]).join(",") +
        "\n" +
        data
          .map((i) => {
            let j = { ...i };
            j.price = "";
            j.createdOn = `${j.createdOn}`;
            return Object.values(j).join(",");
          })
          .join("\n")
    );
  };
  const onOpen = (i) => {
    setOpen(true);
    setPropsObject({ ...data[i] });
  };
  const onOpenInput = (i) => {
    setModalInput(true);
    setIndex(i);
  };

  if (data && data.length)
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <td>{t("date")}</td>
              <td>{t("campaign")}</td>
              <td>{t("pricing")}</td>
              <td>{t("action")}</td>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={`table-row-${index}`}>
                <td>
                  <span>{moment(i.createdOn).format("MMM YYYY,DD")}</span>
                  <br />
                  <span>
                    {Math.abs(moment(i.createdOn).diff(moment(), "days"))}{" "}
                    {t("days")}{" "}
                    {moment(i.createdOn).diff(moment(), "days") > 0
                      ? t("later")
                      : t("ago")}
                  </span>
                </td>

                <td className="flexify">
                  <div className="img-position">
                    <Imageitem value={i.image_url} />
                  </div>
                  <div className="name">
                    <span className="name-span">{i.name}</span>
                    <br />
                    <span className="region">{i.region}</span>
                  </div>
                </td>

                <td>
                  <button
                    className="btn-price"
                    onClick={() => {
                      onOpen(index);
                    }}
                  >
                    <FontAwesomeIcon
                      className="svg-icon"
                      icon={faDollarSign}
                      size="lg"
                      color="white"
                    />
                    {t("viewPricing")}
                  </button>
                </td>

                <td>
                  <ul className="list-actions">
                    {" "}
                    <li>
                      <a href={csvCreator()} download="download.csv">
                        <FontAwesomeIcon
                          size="lg"
                          color="green"
                          icon={faFileExcel}
                        />
                        {t("csv")}
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        window.print();
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faChartArea}
                        color="orange"
                        size="lg"
                      />
                      {t("report")}
                    </li>
                    <li
                      onClick={() => {
                        onOpenInput(i);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCalendar}
                        color="blue"
                        size="lg"
                      />
                      {t("scheduleAgain")}
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

  return <>No data yet</>;
};

export default Table;
