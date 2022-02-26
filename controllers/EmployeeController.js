import bcrypt from 'bcrypt';
import { employeeModel } from "../model/employeeModel.js";
class EmployeeController {

static getAllDoc = async (req, res) => {
        try {
         const result = await employeeModel.find();
         //console.log(result._id);
            res.render('registration',{data:result});
        } catch (err) {
            console.log(err);
        }
    };

static createDoc = async (req, res) => {
        const { fname, lname, pass, Cpass, gender, email, Mnum, select, ans } = req.body;
    
    if (pass == Cpass) {
            const salt = await bcrypt.genSalt(6);
            const hashed = await bcrypt.hash(pass, salt);
            const newUser = new employeeModel({
                first_name: fname,
                last_name: lname,
                password: hashed,
                //confirm_password: Cpass,
                gender: gender,
                email: email,
                mobile_number: Mnum,
                select: select,
                security: ans
            });
            //const data =new user(req.body);
            newUser.save()
                .then((data) => {
                    res.send(data);

                }).catch((err) => {
                    console.log("Error found" + err);
                })

        } else {
            res.send("Password does not match!");
        }
    };
//login phase
static login = async (req, res) => {
        const { email, pass } = req.body;
        const result = await employeeModel.findOne({ email: email });
        console.log(result);
       // const data = await studentModel.find();
       if(result!=null){
        const validPassword = await bcrypt.compare(pass, result.password);
        
           if(validPassword){
               //res.json(result);
               res.render("employeeDetail",{data:result});
           }
           else{
               res.send("Invalid password");
           }
       }
       else{
          res.send("Invalid User");
       }

    }

static editDoc = async (req, res) => {
        console.log(req.params);
        try {
            const result = await employeeModel.findById(req.params.id);
            res.render("edit", { data: result });
        } catch (err) {
            console.log(err)
        }
    };
static updateDoc = async (req, res) => {
        try {
            console.log(req.body);
            const result = await employeeModel.findByIdAndUpdate(req.params.id, req.body);
            //res.send("successfully update");
            res.json(result);
        } catch (err) {
            console.log(err)
        }
    };
static deleteDoc = async (req, res) => {
        try {
            const result = await employeeModel.findByIdAndDelete(req.params.id);
            res.render("employeeDetail",{data:result});
        } catch (err) {
            console.log(err)
        }
    };
};
export {EmployeeController} ;