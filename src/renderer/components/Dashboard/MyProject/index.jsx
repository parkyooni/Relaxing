import { MyProjectContentContainer } from "@public/style/Dashboard.styles";
import icons from "@public/images";

const MyProject = () => {
  return (
    <MyProjectContentContainer>
      <p>
        <img src={icons.folderLineIcon} alt="Folder Line Icon" />
        <span>src</span>
      </p>
      <ul>
        <li>
          <img src={icons.closeIcon} alt="Close Icon" />
          <img src={icons.folderLineIcon} alt="Folder Line Icon" />
          <span>assets</span>
        </li>
        <li>
          <img src={icons.closeIcon} alt="Close Icon" />
          <img src={icons.fileIcon} alt="File Icon" />
          <span>index.css</span>
        </li>
      </ul>
    </MyProjectContentContainer>
  );
};

export default MyProject;
