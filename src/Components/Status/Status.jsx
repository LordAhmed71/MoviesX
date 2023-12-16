import {
  formatDateYears,
  getHoursAndMinutes,
  formatDate,
} from "../../Utils/helpers.js";
const Status = ({ status, name, formatType }) => {
  return (
    <>
      {status && (
        <div className="infoItem">
          <span className="text bold">{name}:</span>
          <span className="text">
            {formatType === "noFormat"
              ? status
              : formatType === "formatDate"
              ? formatDate(status)
              : getHoursAndMinutes(status)}
          </span>
        </div>
      )}
    </>
  );
};

export default Status;
