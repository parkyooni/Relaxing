import { MyProjectContentContainer } from "@public/style/Dashboard.styles";
import icons from "@public/images";

function getIconByFileType(type, path) {
  if (type === "folder") return icons.folderLineIcon;

  const extension = path.split(".").pop().toLowerCase();

  const iconMap = {
    vue: icons.vueIcon,
    jsx: icons.reactIcon,
    tsx: icons.reactIcon,
    js: icons.jsIcon,
    ts: icons.tsIcon,
    css: icons.cssIcon,
    json: icons.jsonIcon,
    svg: icons.imgIcon,
    png: icons.imgIcon,
    jpg: icons.imgIcon,
    gif: icons.imgIcon
  };

  return iconMap[extension] || icons.fileIcon;
}

const sortItems = items => {
  return [...items].sort((a, b) => {
    if (a.type === "folder" && b.type !== "folder") return -1;
    if (a.type !== "folder" && b.type === "folder") return 1;
    return a.name.localeCompare(b.name);
  });
};

const updateFolderStructure = (
  folderStructure,
  targetFolderName,
  updatedChildren
) => {
  if (folderStructure.name === targetFolderName) {
    return { ...folderStructure, children: updatedChildren };
  }

  if (folderStructure.children) {
    const updatedChildrenList = folderStructure.children.map(child =>
      updateFolderStructure(child, targetFolderName, updatedChildren)
    );

    return { ...folderStructure, children: updatedChildrenList };
  }

  return folderStructure;
};

const findMatchingFolder = (children, name) => {
  for (const item of children) {
    if (item.name === name) return item;
    if (item.children) {
      const foundFolder = findMatchingFolder(item.children, name);
      if (foundFolder) return foundFolder;
    }
  }
  return null;
};

const ItemList = ({ items = [] }) => {
  const sortedItems = sortItems(items);

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.path}>
          <div className="data-list">
            <img
              src={getIconByFileType(item.type, item.path)}
              alt={item.type === "folder" ? "Folder Line Icon" : "File Icon"}
            />
            <span>{item.name}</span>
          </div>

          {item.type === "folder" &&
            item.children &&
            item.children.length > 0 && <ItemList items={item.children} />}
        </li>
      ))}
    </ul>
  );
};

const MyProject = ({
  folderStructure = { children: [] },
  setFolderStructure
}) => {
  const targetFolder = findMatchingFolder(
    folderStructure.children,
    folderStructure.name
  );

  return (
    <MyProjectContentContainer>
      {targetFolder && targetFolder.children ? (
        <>
          <p>
            <img src={icons.folderLineIcon} alt="Folder Line Icon" />
            <span>{targetFolder.name}</span>
          </p>
          <ItemList
            items={targetFolder.children}
            setItems={updatedChildren => {
              const updatedStructure = updateFolderStructure(
                folderStructure,
                targetFolder,
                updatedChildren
              );
              setFolderStructure(updatedStructure);
            }}
          />
        </>
      ) : (
        <span>프로젝트가 없습니다.</span>
      )}
    </MyProjectContentContainer>
  );
};

export default MyProject;
