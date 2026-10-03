"use client";

import { updateUser } from "@/lib/auth-client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
;

export default function ProfilePage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());
    // alert("Form submitted successfully!");
    // console.log("Form submitted successfully!", userdata);
    const resdata= await updateUser({
        name: userdata.name,
    })
    console.log("resdata", resdata);
 
  };

  return (
    <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}













// "use client";

// import {
//   updateUser,
//   changePassword,
// } from "@/lib/auth-client";

// import { FloppyDisk } from "@gravity-ui/icons";

// import {
//   Button,
//   Description,
//   FieldError,
//   FieldGroup,
//   Fieldset,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// export default function ProfilePage() {
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const userdata = Object.fromEntries(formData.entries());

//     // Change name
//     if (userdata.name) {
//       const { data, error } = await updateUser({
//         name: userdata.name,
//       });

//       console.log("Update user:", data, error);
//     }

//     // Change password
//     if (
//       userdata.currentPassword &&
//       userdata.newPassword &&
//       userdata.confirmPassword
//     ) {
//       if (userdata.newPassword !== userdata.confirmPassword) {
//         alert("New password and confirm password do not match");
//         return;
//       }

//       const { data, error } = await changePassword({
//         currentPassword: userdata.currentPassword,
//         newPassword: userdata.newPassword,
//         revokeOtherSessions: false,
//       });

//       console.log("Change password:", data, error);

//       if (error) {
//         alert(error.message);
//         return;
//       }

//       alert("Password changed successfully!");
//     }
//   };

//   return (
//     <Form className="w-full max-w-96" onSubmit={onSubmit}>
//       <Fieldset>
//         <Fieldset.Legend>Profile Settings</Fieldset.Legend>

//         <Description>
//           Update your profile information.
//         </Description>

//         <FieldGroup>

//           {/* Name */}
//           <TextField
//             isRequired
//             name="name"
//             validate={(value) => {
//               if (value.length < 3) {
//                 return "Name must be at least 3 characters";
//               }

//               return null;
//             }}
//           >
//             <Label>Name</Label>
//             <Input placeholder="John Doe" />
//             <FieldError />
//           </TextField>

//           {/* Current Password */}
//           <TextField
//             name="currentPassword"
//             type="password"
//           >
//             <Label>Current Password</Label>
//             <Input placeholder="Enter current password" />
//             <FieldError />
//           </TextField>

//           {/* New Password */}
//           <TextField
//             name="newPassword"
//             type="password"
//             validate={(value) => {
//               if (value && value.length < 8) {
//                 return "Password must be at least 8 characters";
//               }

//               return null;
//             }}
//           >
//             <Label>New Password</Label>
//             <Input placeholder="Enter new password" />
//             <FieldError />
//           </TextField>

//           {/* Confirm Password */}
//           <TextField
//             name="confirmPassword"
//             type="password"
//           >
//             <Label>Confirm New Password</Label>
//             <Input placeholder="Confirm new password" />
//             <FieldError />
//           </TextField>

//         </FieldGroup>

//         <Fieldset.Actions>
//           <Button type="submit">
//             <FloppyDisk />
//             Save changes
//           </Button>

//           <Button type="reset" variant="secondary">
//             Cancel
//           </Button>
//         </Fieldset.Actions>
//       </Fieldset>
//     </Form>
//   );
// }