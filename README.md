# EasyEditCard
low funds this year while job hunting after a 3 month bootcamp, so why not deploy a free basic card to edit for personal use and anyone else who needs a card that only costs time. 

Deployed link has 3 generic cards 3001: classic red, 3002: greetings green, and 3003 one for the fam.

Set up to make you own after forking and cloning. Designs kept basic to get multiple on to the free EC2 instance without running out of space, so have fun if only making one. 

1. 'npm install' to install dependencies.
2. 'npm run dev' to have webpack compile on saves while editing.
3. after editing src/App.jsx line 22 how you want, deploy on a free site using npm run build after cloning and running step 1 again in the instance terminal, then npm run server to get the server up and running.
4. After checking thats working stop the server and run 'screen -d -m npm run server', to keep the server running after closing the terminal
