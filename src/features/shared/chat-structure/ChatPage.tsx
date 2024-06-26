'use client';
import { useChat } from "ai/react";
import { useSession } from "next-auth/react";


function ChatPage() {

    const { data: session, status } = useSession()

    console.log(session);
    const { handleInputChange, handleSubmit, messages, input } = useChat({
        api: 'api/chat',
    });
    return (
        <section className="p-2 min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-700 to-slate-950 flex-col lg:p-20">
            <div className=" space-y-5 max-w-xl w-full m-4 p-2 font-bold bg-slate-950 border-2 border-slate-600 mt-52">

                {messages.length ? (
                    <>
                        {messages.map(message => (
                            <div key={message.id} className="text-black">
                                <div>
                                    {message.role == 'user' ? (
                                        <div className="bg-slate-200 p-2 overflow-x-auto ">
                                            {session?.user ? (
                                                <div className="flex justify-start items-center gap-2">
                                                    <div className="flex items-center gap-2">
                                                        {session.user.image && (
                                                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                                                <img
                                                                    src={session.user.image}
                                                                    alt="perfil"
                                                                    className="rounded-full w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                        <span className="font-bold text-green-500">
                                                            {session?.user?.name ? session.user.name : session.user.firstname} :
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {message.content}
                                                    </div>
                                                </div>
                                            ) : (
                                                <h1 className="text-white">Ni siquieras se por qué estas aquí si no estas authenticado xd</h1>
                                            )}

                                        </div>

                                    ) : (

                                        <div className="bg-slate-200 p-2  ">
                                            <span className="text-red-500 tracking-wider">Miaya: </span> {message.content}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>

                ) : (
                    <h1 className="text-center uppercase font-semibold text-green-500">dile algo a MIAya y chattea con ella</h1>
                )}
            </div>

            <form className="max-w-xl w-full bg-black p-4" onSubmit={handleSubmit}>
                <div className="flex justify-between my-4">
                    <label className="justify-between my-2 text-white font-semibold block "> Say something</label>
                    <button type="submit" className="bg-green-500 px-4 rounded-xl font-semibold hover:bg-green-800">Send</button>
                </div>
                <textarea
                    placeholder="Type your message here"
                    rows={4}
                    onChange={handleInputChange}
                    className="text-black bg-slate-300 w-full font-semibold p-2 rounded-md focus:outline-none"
                    name="prompt"
                    value={input}
                    id="input"
                >

                </textarea>

            </form>
        </section>
    )
}

export default ChatPage;