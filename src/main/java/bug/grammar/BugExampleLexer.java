// Generated from BugExample.g4 by ANTLR 4.7
package bug.grammar;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class BugExampleLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, FRACTION=3, CONSTANT=4, FLOAT=5, IDENTIFIER=6, SPACE=7;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "FRACTION", "CONSTANT", "FLOAT", "IDENTIFIER", "SPACE", 
		"NATURAL", "INTEGER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'-'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "FRACTION", "CONSTANT", "FLOAT", "IDENTIFIER", "SPACE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public BugExampleLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "BugExample.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\tK\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2"+
		"\3\3\3\3\3\4\3\4\7\4\34\n\4\f\4\16\4\37\13\4\3\4\3\4\3\5\3\5\3\5\5\5&"+
		"\n\5\3\6\3\6\5\6*\n\6\3\6\3\6\5\6.\n\6\3\7\3\7\7\7\62\n\7\f\7\16\7\65"+
		"\13\7\3\b\6\b8\n\b\r\b\16\b9\3\b\3\b\3\t\3\t\7\t@\n\t\f\t\16\tC\13\t\3"+
		"\n\3\n\5\nG\n\n\3\n\5\nJ\n\n\2\2\13\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\2"+
		"\23\2\3\2\5\4\2C\\c|\5\2\62;C\\c|\5\2\13\f\17\17\"\"\2Q\2\3\3\2\2\2\2"+
		"\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\3\25\3\2\2\2\5\27\3\2\2\2\7\31\3\2\2\2\t%\3\2\2\2\13\'\3\2\2\2\r/\3"+
		"\2\2\2\17\67\3\2\2\2\21=\3\2\2\2\23I\3\2\2\2\25\26\7/\2\2\26\4\3\2\2\2"+
		"\27\30\7#\2\2\30\6\3\2\2\2\31\35\7\60\2\2\32\34\4\62;\2\33\32\3\2\2\2"+
		"\34\37\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36 \3\2\2\2\37\35\3\2\2\2 "+
		"!\4\63;\2!\b\3\2\2\2\"&\7g\2\2#$\7r\2\2$&\7k\2\2%\"\3\2\2\2%#\3\2\2\2"+
		"&\n\3\2\2\2\')\5\23\n\2(*\5\7\4\2)(\3\2\2\2)*\3\2\2\2*-\3\2\2\2+,\7g\2"+
		"\2,.\5\23\n\2-+\3\2\2\2-.\3\2\2\2.\f\3\2\2\2/\63\t\2\2\2\60\62\t\3\2\2"+
		"\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\16\3\2\2\2"+
		"\65\63\3\2\2\2\668\t\4\2\2\67\66\3\2\2\289\3\2\2\29\67\3\2\2\29:\3\2\2"+
		"\2:;\3\2\2\2;<\b\b\2\2<\20\3\2\2\2=A\4\63;\2>@\4\62;\2?>\3\2\2\2@C\3\2"+
		"\2\2A?\3\2\2\2AB\3\2\2\2B\22\3\2\2\2CA\3\2\2\2DJ\7\62\2\2EG\7/\2\2FE\3"+
		"\2\2\2FG\3\2\2\2GH\3\2\2\2HJ\5\21\t\2ID\3\2\2\2IF\3\2\2\2J\24\3\2\2\2"+
		"\f\2\35%)-\639AFI\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}