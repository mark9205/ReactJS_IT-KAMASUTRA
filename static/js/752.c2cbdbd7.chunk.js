"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[752],{752:function(e,s,t){t.r(s),t.d(s,{default:function(){return J}});var i=t(1413),n=t(5671),r=t(3144),o=t(136),u=t(5716),c=t(2791),a=t(885),l="ProfileInfo_descr__IqKdr",d="ProfileInfo_mainPhoto__TGloi",f="ProfileInfo_textInfo__LfC10",h=t(5739),A=t(3975),g=t(184),p=function(e){var s=(0,c.useState)(!1),t=(0,a.Z)(s,2),i=t[0],n=t[1],r=(0,c.useState)(e.status),o=(0,a.Z)(r,2),u=o[0],l=o[1];(0,c.useEffect)((function(){l(e.status)}),[e.status]);return(0,g.jsxs)("div",{children:[!i&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Status: "}),(0,g.jsx)("span",{onDoubleClick:function(){n(!0)},children:e.status||"---"})]}),i&&(0,g.jsx)("div",{children:(0,g.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(u)},value:u})})]})},j=t(704),x=t(4857),m=(0,j.Z)({form:"edit-profile"})((function(e){var s=e.handleSubmit,t=e.profile,i=e.error;return(0,g.jsxs)("form",{onSubmit:s,children:[(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"save"})}),i&&(0,g.jsx)("div",{children:i}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"full Name: "}),(0,x.Gr)("Full name","fullName",x.II,[])]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking For A Job: "}),(0,x.Gr)("","lookingForAJob",x.II,[],{type:"checkbox"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Job Description: "}),(0,x.Gr)("Job Description","lookingForAJobDescription",x.Kx,[])]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About Me: "}),(0,x.Gr)("About Me","aboutMe",x.Kx,[])]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"contacts: "}),Object.keys(t.contacts).map((function(e){return(0,g.jsx)("div",{children:(0,g.jsxs)("b",{children:[e,": ",(0,x.Gr)("key","contacts."+e,x.II,[])]})})}))]})]})})),v=function(e){var s=e.profile,t=e.isOwner,i=e.goToEditMode;return(0,g.jsxs)("div",{children:[t&&(0,g.jsx)("div",{children:(0,g.jsx)("button",{onClick:i,children:"edit"})}),(0,g.jsx)("div",{className:f,children:"Profile Info"}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"full Name: "}),s.fullName]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking For A Job: "}),s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Job Description: "}),s.lookingForAJobDescription]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About Me: "}),s.aboutMe]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"contacts: "}),Object.keys(s.contacts).map((function(e){return(0,g.jsx)(b,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})]})},b=function(e){var s=e.contactTitle,t=e.contactValue;return(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:s}),":",t]})},P=function(e){var s=e.profile,t=e.status,i=e.updateStatus,n=e.savePhoto,r=e.isOwner,o=e.saveProfile,u=(0,c.useState)(!1),f=(0,a.Z)(u,2),j=f[0],x=f[1];if(!s)return(0,g.jsx)(h.Z,{});return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{src:s.photos.large||A,className:d,alt:""}),r&&(0,g.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}}),j?(0,g.jsx)(m,{profile:s,onSubmit:function(e){o(e),x(!1)},initialValues:s}):(0,g.jsx)(v,{profile:s,isOwner:r,goToEditMode:function(){x(!0)}}),(0,g.jsx)(p,{status:t,updateStatus:i}),(0,g.jsx)("div",{children:s.fullname})]})})},C=t(6070),I="MyPosts_postsblock__Dvl-H",k="MyPosts_posts__i0Wt4",w="Post_item__SSX8n",q=function(e){return(0,g.jsxs)("div",{className:w,children:[(0,g.jsx)("img",{src:"https://i.pinimg.com/236x/35/74/20/3574208d2f666b42fb746e6117a3787f--silhouette-cameo-pandas.jpg",alt:""}),e.message,(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{children:"like"}),e.likesCount]})]})},R=t(6139),D=t(5304),B=(0,D.h)(10),Z=function(e){return(0,g.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)(R.Z,{name:"newPostText",component:x.Kx,placeholder:"Post message",validate:[D.C,B]})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Add post"})}),(0,g.jsx)("button",{children:"Remove"})]})},F=c.memo((function(e){var s=e.posts.map((function(e){return(0,g.jsx)(q,{message:e.message,likesCount:e.likesCount})}));return(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("h3",{children:"My_posts"}),(0,g.jsx)(Z,{onSubmit:function(s){e.addPost(s.newPostText)}}),(0,g.jsx)("div",{className:k,children:s})]})}));Z=(0,j.Z)({form:"profileAddNewPostForm"})(Z);var O=F,T=t(364),E=(0,T.$j)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(s){e((0,C.Wl)(s))}}}))(O),y=function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(P,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,g.jsx)(E,{})]})},G=t(9271),M=t(1548),U=t(7781),Y=function(e){(0,o.Z)(t,e);var s=(0,u.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,g.jsx)(y,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(c.Component),J=(0,U.qC)((0,T.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:C.et,getStatus:C.lR,updateStatus:C.Nf,savePhoto:C.Ju,saveProfile:C.Ii}),G.EN,M.D)(Y)},3975:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAL0UlEQVR4nO2deaxfRRXHP5RaiCGmIqnkxmBDEJqKUDiCyFKwZZdNIFgKsgRoQqAiAgJpsDGYVGgICBpWkwIKamSRpRbyCthURPTgA4kRRCS19BYlL7UiKbU2/jHzSnl2ubPcmbm/9/sk5JXXWU5/9/ubmTsz55xt6EFEpAIqYAKwk/358Y3+vPHvAf4OvG1/Dv/5rRG/X6GqK9L9K9KwTW4DQhGRHYDPAgcAn7c/J2yxkj8rgGeBX9mfg6q6tqW+ktBJAYjIBOAk4BRgGjA2kynvAguBB4DHVPWdTHZ40xkBiMiHgXOA04EDgTFZDfp/1gJPAj8Cfqaq6zLb04jiBWDn80uAWcD4zOY0ZTlwI3CXqq7ObcyWKFYAIjIJuAY4jXxDfCirgTuAeao6lNuYTVGcAERkPDAXuJjuPviRrALmALep6vrcxmxMMQIQkTGYYf5azCtaL/IycJGqLsltyDBFCEBEJgI/AfbPbEoq7gJmq+qa3IZkF4CInADcTXcWeLEYBE5R1ddzGpFNACIyFpgPfC2XDQWwGjhbVR/OZcC2OTq1u3e/AGbk6L8gtgNmVFX1Xl3XS3MYkFwAdpX/BHBw6r4L5vCqqv5b13XyxWFSAYjITsBizN59nw8yraqqsXVdP52y02QCsA//l8BnUvXZQaZWVTWuruunUnWYRAB2wfcosF+K/jrOIVVV/bWu6xdTdJbqQGU+cFiivnqB20VkSoqOWn8NFJGZmBOyPm68AUjbZwitjgAishfwgzb76GEmYnZHW6W1NYDd238U2KWtPkYBu1ZV9be6rn/fVgdtjgCz6L/uxeA6EdmxrcZbEYC9sjWvjbZHITvR4mfZ1ghwA6PvcKdNzheRVkbT6AIQkX2BM2O3O8oZg7li1krDsbmshTb7wMEiEv2+RFQB2Aucp8Vss88HuDR2g7FHgNn0zj2+EjlVRD4Rs8FoArD39mfFaq/PJhmL+ZJFI+YIcCrQ2vtqnw3MsodrUYg5XH8pYltt8TbGp28lxuHzH8AazCvrRzEC3hlzOXXnTDZujfGYg7WBGI1FEYCIbA8cGaOtFngW47s3oKovNa0kIrtiXNCOwoxu27djnhcnEkkAUU4DReRY4PEYbUXkMYxHzrOhDdmt2HOAC4HdQtuLwDJV/WSMhmIJ4E7g/BhtReBPwOmqOhi7YTv3Xo7xXMo9IuwT498YaxF4XKR2QlmAOUOP/vABVHWdqn4H2Bt4ro0+HDghRiPBArBzZQkLpgtU9VxVfbftjlT1VWA6kNPF6wsxGokxAiS5urQVrlTVu1J2aIV2DJDlPj+wV4xGYghg7whthPA9Vb0+R8dWBMdjXitTs6OIBF+2iSGAKEr05DlM8IhsqOqqjDYEf/ZdF8ClJfjbq+pPgUUZug6efoM2gqyP366hRnjyY1V1XomLyDhgT8yly10wr3MvAy+p6rIAe24Ejg6o78M+oQ2E7gTmevjrgCtdK4nISZgHNXEzf38fcImqvu1h01PAEGnPQyaFNhA6BeQ6/Fni+m0VkQeAh9jMw7fMBF4Rkd1dDbJRwR50rRdIcCSVrgrg5y6FReRk4OSGxXcE7nS2yPBrz3q+jFoBPNK0oJ3z5zu2P9V6NLmy3KNOCGNCr4x3UQAvq+obDuVn4LdWme5RJ7UAIHAUCBXAxwLr+/CqY/lPe/bj83qbIxZgVgHkuPvvuuvmu1vms8KOel+vIVkFkCNeb+1YfqJnPz7Ru3LcFRgXUjn0AeYIlZ5qBHjeo04OAQQFpQ7dCMohgDNE5BCH8j5H1evxc2vfw6NOKFkFkCPS5WEJ+rjZdZvZvm5Oa8meLREkgC5OAW2zBLjao975mDQ1qckqgPcC65fGAHCMawxf++33EU0Mgr6E/RHgfRYBx3teKfsqeV4BIfMIsCqwfik8ApzoE71bRE4FrotvUmOC7kCGCiDk/LwUHsZE7XYezUTkcEwEtJz5i4JS2Y12AQwAX/ZJ8CQip2FOJYM2YgJZh3F38yb0NbDLAvgdZth3+uYXFuZ+ZeiVuKARwC6YikyGtBXexXzzneZPGwDjacp4+BA4/EOcueuNCG2k5mrXTB0iciTwImWFuS9CAF2bBp5T1ZtdKojIVZgcB6Ulswq+fxDDPbxrArjBpbCIXAd8oyVbQnkztIGgEcDmACg1LsCmGMLtOtkNlPvwAQ4NjRbiLQAR+QhmWAy+mpyQ+5qu+kXkQODrLdsTytGYjGveeAnABoR6HNg3pPMMNIq+bQNd39qyLbGYKSK3+Fb2HQGupazVcFNea1huBnld3ly5WETO8qnoLAAbD+Bin84ysw4TGKoJXUxtM8+OzE74jADzybv96ctyh12zya1a0g4VHkfSTgKwC6OmHjal4fLOvGdrVrTL5a6RRF1fIb7iWL4kpojIKw3L5rjZE4PtMdHMvt20gqsAogQmysQOgLPTZwc5BQcBNJ4CbMKCrn4zRhNTXELHuKwBTvQwpk8eGq/TXARwgIchffJwaNOCLgIoIRZgn2Y0fhPoC6A3abxWaxQr2J44/cfbnD6pWQ98qMnGV9PXwF779i/FBHX6jf3/z2Hcurp4vrEpxmCe2VZvDDUVQK84gKwCZqvqD0f8fiEwV0TOBG6hN3IeNtr2bhwuXkTeo5tnAMOswUQS/+OWConIZEDJHw4+hLWqul2Tgi6LwK5d/RrJnK09fABbZk4Ce9qk8bmHiwC2+uEVzBBwk0P5m+i221vjZ+UigAc8DCmFQRcHClv2hRbtaZuHmhZ0EcDDdHcx2DhZVGCdEliPyZfUiMYCUNXVONyoLQyfQ6yuHnw9papNbz453wiaS8PXi8LwubzatQuvw1zjUthJAHaFfIeTOWWwmz3OboQtW0J6OFcec41t5HMncC7ddAi91ya43CK2zL0J7InNWjxC6DsLwM4vZ9C9qWAScP+Wgivbv7ufbjm7DHNlk32OkXgnjhSRbwHf9K2fkZXAFZjF0grY4PY9DXPjuYvnHotU9RifiiECGINxSzrTt40CGF4tT8hqRRgvAdM9s5yEp44VkXnAVaHt9PFiKfBF+4ruxbahFtR1vbiqqreAY4mUi7hPIx4BTlDVf4c0Eu2BichxGOdLZ/ekPs4sAM6LkTIv6jdWRPbHRM7q4kKqK1yvqs6ve5sjeArYmLqu36yq6lZMEKb9gEZn0n0a8SQwU1WD4gGMpLU5275Tz8F4Enf5IklulmDuMrSSpLr1RZv1Urmd9Fk1u84gcIWqDrTZSZJVu40p8JcUffUQe6iqa4IsZ5LEuLUx+Ram6KtHWJTi4UPaIMfecWxGId9N1VHSjRsR+TPdPGZNyWuq+qlUnaUOc/79xP11kaQjZWoBLCAwwUGP8w7mM0pGUgGo6ipgpFdOn/dZEHKw40OOTBfX0u07922xmgypZ5ILQFWXAxel7rcDzLafTVKingU0pa7rP1RVNRn/zN69xoOqmsUdLWeyowuJkPCgB1gJXJCr82wCUNUh4Lxc/RfEufazyEKWKWCYuq5fq6pqAt2MzRuD21Q12a7fpsg5BQxzBX6p2rvOC8BluY3ILgCbuesoTBq30cIgcIRnmtqoFHOJU0TGA4vprk9eUwYx17iL8K4qRgCw4RbRYmBKbltaoqiHD4UJADaI4Gm6lbGjCcU9fChgDTAS+wFNp7fWBM9T4MOHAgUAYN2cDsItrk+p3AQcUuLDhwKngJFYh5O7gc169RbKEHC2qjYO15KD4gUAG7x37wem5ralIUuB03Mc7riSdSewKXVd/6uqqnswgj2IQqcuTMyEecBZqvrP3MY0oRMjwMaIyO6Yc/OTctsygoWYe/ydiqfYOQEMIyJTMYmgG8f+aYkXgMtU9ZnMdnjRWQEMIyIzMcNu4zw5kVgGXK2q9yXuNyqdFwCAiIzDTAkXAoe13N0zGFe3B5smoi6ZnhDAxojIJIwQziJe2Pch4B7g1lQeO6noOQEMY8O9HQccARwJTHRs4nVgAHgCWKiqa6IaWAg9K4CRWAfVwzGXT3bBJFYaTq603P63DPgtMGD9GXue/wElzg/sf/P82QAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=752.c2cbdbd7.chunk.js.map