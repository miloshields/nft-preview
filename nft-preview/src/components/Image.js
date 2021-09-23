// Image Component
// parameters: 
//      name (the name of the image file, which will be searches for in assets/)
//      classProp (the name of the class to give to the image)
const Image = ({ name, classProp, altProp }) => {
    try {
        const image = require(`../assets/${name}`);

        if(!image) return null;
        return <img className={classProp} src={image.default} alt={altProp} />;
    } catch (err) {
        console.log(`Image with name ${name} could not be found.`);
        return null;
    }
}

export default Image
