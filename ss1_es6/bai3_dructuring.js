const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};
const {firstName, gender, education:{degree} , languages} = person;
const [english] = languages
const student = {firstName,gender,degree,english};
console.log(student);


const getInfo = ({firstName= "Quan",degree="NA"}) =>{
    console.log("firstName: "+firstName);
    console.log("degree: "+degree);
}
getInfo(student);
