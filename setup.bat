git clone https://github.com/angular/quickstart.git
xcopy /s/y .\app\* .\quickstart\app
rename quickstart user-feedback
cd user-feedback
(cls
npm install
cls
npm start
)
