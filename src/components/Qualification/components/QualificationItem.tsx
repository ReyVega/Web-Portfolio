interface IQualificationItem {
  title: string;
  subtitle: string;
  iconSubtitle: string;
  iconDate: string;
  date: string;
}

function QualificationItem(props: IQualificationItem) {
  return (
    <div className="qualification__data">
      <h3 className="qualification__area">{props.title}</h3>

      <div className="qualification__box">
        <span className="qualification__work">
          <i className={props.iconSubtitle + " qualification__icon"} />
          {props.subtitle}
        </span>

        <span className="qualification__work">
          <i className={props.iconDate + " qualification__icon"} />
          {props.date}
        </span>
      </div>
    </div>
  );
}

export default QualificationItem;
