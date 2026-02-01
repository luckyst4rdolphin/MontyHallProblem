import "./Middle.css"

function PostSim () {
    return (
        <div class="bodysection">
            <div class='bulk'>
                <p class='content'>Doesn’t two remaining options mean each has an equal likelihood of being the correct door?</p>
                <p class='content'><span class='emph'>Yes…but only if you have no other information about the doors. </span>  
                     The usual `50-50` is only the case when everything is random. The key difference here is that we are provided more information in our little game, so we can better our chances.</p>

                <p class='content'>Look at that. <span class='emph'>The more you know.</span></p>

                <div class="divider div-transparent div-arrow-down"></div>

                <p class='content'>What really lies at the heart of this problem is <span class='emph'>Bayes' Theorem</span>. It tells us that prior knowledge on an event matters
                when determining its likelihood.</p> <br />
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>P</mi>
                <mi>(A | B)</mi>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                      <mi>P</mi>
                      <mi>(B | A)</mi>
                      <mo> · </mo>
                      <mi>P</mi>
                      <mi>(A)</mi>
                    </mrow>
                    <mrow>
                      <mi>P</mi>
                      <mi>(B)</mi>
                    </mrow>
                </mfrac>
                </math>
                <br />
                <p class="content">So the next time you want to leave your chances up to fate, remember that you are able to reevaluate your decisions when you've gathered new information. This might just lead you to the right path.</p>
            </div>
        </div>
    )
}

export default PostSim;