# Electron IPC-Dispatcher

Using an IPC with an electron creates a couple of inconveniences. The processes (main and render) are completely isolated and the only way is interfacing with IPC. There are two different layers - the main process and the rendering process (s). There is always only one main process, which is the starting point of your Electron application and it can be any number of rendering processes that are responsible for rendering your application. Each rendering process isolated from each other. It might sounds like complicated, and number of source code lines.
Here is quite simpl way interfacing with inter-process communication (IPC). 

